// app/contact/ContactDashboard.jsx
'use client';

import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer,
  CartesianGrid, BarChart, Bar
} from "recharts";
import {
  Download, Plus, Search, RefreshCw, Sun, Moon, Mail, Globe,
  Building2, User, CalendarDays, Copy
} from "lucide-react";

const API_URL = "https://backend-black-snowflake-3088.fly.dev/api/contact";

/* ---- Minimal UI tuned for dark ---- */
function Button({ className = "", variant = "solid", size = "md", ...props }) {
  const base = "inline-flex items-center justify-center rounded-xl font-medium transition";
  const sizes = { sm: "h-8 px-3 text-sm", md: "h-10 px-4", lg: "h-11 px-5 text-lg" };
  const variants = {
    solid: "bg-white text-gray-900 hover:bg-gray-200",
    outline: "border border-gray-600 text-white hover:bg-gray-800/60",
    ghost: "text-white hover:bg-gray-800/60"
  };
  return <button className={`${base} ${sizes[size]} ${variants[variant]} ${className}`} {...props} />;
}
const Card = ({ className = "", children }) => (
  <div className={`rounded-2xl border border-gray-700 bg-gray-800/60 shadow-sm ${className}`}>{children}</div>
);
const CardHeader = ({ children, className = "" }) => <div className={`p-4 border-b border-gray-700 ${className}`}>{children}</div>;
const CardTitle = ({ children }) => <h2 className="text-base font-semibold text-white">{children}</h2>;
const CardContent = ({ children, className = "" }) => <div className={`p-4 ${className}`}>{children}</div>;
const Input = (props) => (
  <input
    {...props}
    className={`h-10 w-full rounded-xl border border-gray-700 bg-gray-900 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-white/20 ${props.className||""}`}
  />
);
const Label = ({ children, ...p }) => <label {...p} className="block text-xs font-medium text-white/80">{children}</label>;
const Badge = ({ children }) => <span className="inline-flex rounded-full border border-gray-700 px-2 py-0.5 text-xs text-white/70">{children}</span>;
const Skeleton = ({ className = "" }) => <div className={`animate-pulse rounded-md bg-gray-700/60 ${className}`} />;

/* ---- Utils ---- */
const fmt = (d) => d ? new Date(d).toLocaleString(undefined, { year: "numeric", month: "short", day: "2-digit" }) : "";
function debounce(fn, delay = 250) { let t; return (...a)=>{ clearTimeout(t); t=setTimeout(()=>fn(...a), delay); }; }
function toCSV(rows){ if(!rows.length) return ""; const h=Object.keys(rows[0]); const esc=v=>{const s=String(v??""); return /[",\n]/.test(s)?`"${s.replace(/"/g,'""')}"`:s}; return [h.join(","),...rows.map(r=>h.map(x=>esc(r[x])).join(","))].join("\n"); }
function download(filename, content, type="text/csv;charset=utf-8;"){ const blob=new Blob([content],{type}); const url=URL.createObjectURL(blob); const a=document.createElement("a"); a.href=url; a.download=filename; a.click(); URL.revokeObjectURL(url); }
const uniq = (arr)=>Array.from(new Set(arr));
const copyToClipboard = (t)=>navigator.clipboard.writeText(t).catch(()=>{});

/* ---- Data hook ---- */
function useContacts() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const ctl = useRef(null);

  const fetchAll = async () => {
    ctl.current?.abort();
    const ctrl = new AbortController(); ctl.current = ctrl;
    setLoading(true); setError(null);
    try {
      const res = await fetch(API_URL, { signal: ctrl.signal });
      if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
      const json = await res.json();
      setData(json.data || []);
    } catch (e) { if (e.name !== "AbortError") setError(e.message || "Network error"); }
    finally { setLoading(false); }
  };

  useEffect(()=>{ fetchAll(); return ()=>ctl.current?.abort(); },[]);
  return { data, error, loading, refresh: fetchAll };
}

/* ---- Charts helpers ---- */
function groupByDate(items, days = 90) {
  const map = new Map(); const now = new Date();
  for (let i=0;i<days;i++){ const d=new Date(now); d.setDate(now.getDate()-(days-1-i)); map.set(d.toISOString().slice(0,10),0); }
  items.forEach(c=>{ const key=(c.createdAt ? new Date(c.createdAt) : new Date()).toISOString().slice(0,10); if(map.has(key)) map.set(key, (map.get(key)||0)+1); });
  return Array.from(map, ([date,count])=>({date,count}));
}
function groupByCountry(items){
  const m=new Map(); items.forEach(c=>m.set(c.country,(m.get(c.country)||0)+1));
  return Array.from(m, ([country,count])=>({country,count})).sort((a,b)=>b.count-a.count).slice(0,10);
}

/* ---- Presentational bits ---- */
function KPI({ title, value, subtitle, icon }) {
  return (
    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle>{title}</CardTitle>
          <div className="text-white/70">{icon}</div>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-white">{value}</div>
          {subtitle && <p className="text-xs text-white/60 mt-1">{subtitle}</p>}
        </CardContent>
      </Card>
    </motion.div>
  );
}
function Th({ label, onClick, active, dir }) {
  return (
    <th className="px-3 py-2 text-left text-xs font-medium uppercase tracking-wider select-none text-white/80">
      <button onClick={onClick} className="inline-flex items-center gap-1 hover:underline">
        {label}
        {active && <span className="text-white/60">{dir === "asc" ? "▲" : "▼"}</span>}
      </button>
    </th>
  );
}
function Field({ label, value, icon, copy }) {
  const val = typeof value === "string" ? value : "";
  return (
    <div>
      <Label className="text-white/70">{label}</Label>
      <div className="mt-1 flex items-center gap-2">
        {icon}
        <span className="text-sm text-white">{value}</span>
        {copy && val && (
          <Button variant="ghost" size="sm" className="h-7 px-2" onClick={() => copyToClipboard(val)}>
            <Copy className="h-4 w-4"/>
          </Button>
        )}
      </div>
    </div>
  );
}

/* ---- Main ---- */
export default function ContactDashboard() {
  const { data, loading, error, refresh } = useContacts();

  // Filters
  const [query, setQuery] = useState("");
  const [country, setCountry] = useState("all");
  const [rowsPerPage, setRowsPerPage] = useState(25);
  const [page, setPage] = useState(1);
  const [sortKey, setSortKey] = useState("createdAt");
  const [sortDir, setSortDir] = useState("desc");

  // Force dark theme & white text
  useEffect(()=>{ document.documentElement.classList.add("dark"); },[]);

  const countries = useMemo(()=>uniq(data.map(d=>d.country).filter(Boolean)).sort(),[data]);
  const debouncedSearch = useMemo(()=>debounce((v)=>setQuery(v),250),[]);
  const filtered = useMemo(()=>{
    const q=query.trim().toLowerCase();
    const out = data.filter(d =>
      (country==="all" || d.country===country) &&
      (!q || [d.firstName,d.lastName,d.email,d.companyName,d.projectDescription,d.country]
        .filter(Boolean).some(x=>String(x).toLowerCase().includes(q)))
    );
    out.sort((a,b)=>{
      const va=a?.[sortKey] ?? ""; const vb=b?.[sortKey] ?? "";
      const cmp=String(va).localeCompare(String(vb),undefined,{numeric:true, sensitivity:"base"});
      return sortDir==="asc" ? cmp : -cmp;
    });
    return out;
  },[data,country,query,sortKey,sortDir]);

  // Pagination
  const totalPages = Math.max(1, Math.ceil(filtered.length/rowsPerPage));
  const currentPage = Math.min(page, totalPages);
  const paged = useMemo(()=>filtered.slice((currentPage-1)*rowsPerPage, currentPage*rowsPerPage),[filtered,currentPage,rowsPerPage]);

  // KPIs
  const total = data.length;
  const last7 = useMemo(()=>{ const t=new Date(); t.setDate(t.getDate()-7); return data.filter(d=>d.createdAt && new Date(d.createdAt)>=t).length; },[data]);
  const withCompany = data.filter(d=>d.companyName?.trim().length>0).length;

  const lineSeries = useMemo(()=>groupByDate(data,90),[data]);
  const countrySeries = useMemo(()=>groupByCountry(data),[data]);

  // Drawer + Form
  const [openDrawer, setOpenDrawer] = useState(null);
  const [openAdd, setOpenAdd] = useState(false);
  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState({ firstName:"", lastName:"", email:"", country:"", companyName:"", projectDescription:"" });

  async function submitForm(e){
    e.preventDefault();
    if(!form.firstName || !form.lastName || !form.email || !form.country || !form.projectDescription){
      alert("Please fill all required fields."); return;
    }
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)){ alert("Invalid email"); return; }
    setSaving(true);
    try{
      const res = await fetch(API_URL,{ method:"POST", headers:{ "Content-Type":"application/json" }, body: JSON.stringify(form) });
      if(!res.ok){ let msg=res.statusText; try{ msg=(await res.json()).error||msg; }catch{} throw new Error(msg); }
      setOpenAdd(false); setForm({ firstName:"", lastName:"", email:"", country:"", companyName:"", projectDescription:"" });
      await refresh();
    }catch(err){ alert(err.message || "Failed to save"); }
    finally{ setSaving(false); }
  }

  function exportCSV(){
    const rows = filtered.map(c=>({
      firstName:c.firstName, lastName:c.lastName, email:c.email, country:c.country,
      companyName:c.companyName||"", projectDescription:c.projectDescription,
      createdAt:c.createdAt ? new Date(c.createdAt).toISOString() : ""
    }));
    download(`contacts_${new Date().toISOString().slice(0,10)}.csv`, toCSV(rows));
  }
  function toggleSort(key){ if(sortKey===key) setSortDir(d=>d==="asc"?"desc":"asc"); else { setSortKey(key); setSortDir("asc"); } }

  return (
    /* pt-24: pushes content below fixed navbar (~96px). Adjust to your Navbar height if needed. */
    <div className="min-h-screen w-full bg-gray-900 text-white pt-24 px-4 sm:px-6">
      <div className="mx-auto max-w-7xl space-y-6">
        {/* Header */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">Contacts Dashboard</h1>
            {/* Removed subtitle per request */}
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" onClick={refresh} className="gap-2"><RefreshCw className="h-4 w-4"/>Refresh</Button>
            <Button onClick={exportCSV} className="gap-2"><Download className="h-4 w-4"/>Export CSV</Button>
            <Button onClick={()=>setOpenAdd(true)} className="gap-2"><Plus className="h-4 w-4"/>Add Contact</Button>
          </div>
        </div>

        {/* Filters */}
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="relative w-full sm:max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/60"/>
                <Input placeholder="Search name, email, company, country..." className="pl-9" onChange={e=>debouncedSearch(e.target.value)} />
              </div>
              <div className="flex items-center gap-3">
                <div className="w-48">
                  <select
                    value={country}
                    onChange={e=>setCountry(e.target.value)}
                    className="h-10 w-full rounded-xl border border-gray-700 bg-gray-900 text-white px-3"
                  >
                    <option value="all">All countries</option>
                    {countries.map(c=><option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
                <div className="w-32">
                  <select
                    value={String(rowsPerPage)}
                    onChange={e=>setRowsPerPage(Number(e.target.value))}
                    className="h-10 w-full rounded-xl border border-gray-700 bg-gray-900 text-white px-3"
                  >
                    {[10,25,50,100].map(n=><option key={n} value={String(n)}>{n}/page</option>)}
                  </select>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* KPIs */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <KPI title="Total Contacts" value={total} icon={<User className="h-5 w-5"/>} subtitle={`Last update: ${fmt(new Date())}`}/>
          <KPI title="Last 7 Days" value={last7} icon={<CalendarDays className="h-5 w-5"/>} subtitle="Rolling window"/>
          <KPI title="Countries" value={countries.length} icon={<Globe className="h-5 w-5"/>} subtitle="Unique"/>
          <KPI title="With Company" value={withCompany} icon={<Building2 className="h-5 w-5"/>} subtitle="Provided"/>
        </div>

        {/* Charts */}
        <div className="grid gap-4 lg:grid-cols-3">
          <Card className="lg:col-span-2">
            <CardHeader><CardTitle>Submissions by Day (90d)</CardTitle></CardHeader>
            <CardContent className="h-64">
              {loading ? <Skeleton className="h-full w-full"/> : (
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={lineSeries} margin={{ top: 10, right: 20, bottom: 0, left: 0 }}>
                    <CartesianGrid stroke="#374151" strokeDasharray="3 3" />
                    <XAxis dataKey="date" tickMargin={8} stroke="#E5E7EB" tick={{ fill: "#E5E7EB" }}/>
                    <YAxis allowDecimals={false} stroke="#E5E7EB" tick={{ fill: "#E5E7EB" }}/>
                    <Tooltip contentStyle={{ background: "#111827", border:"1px solid #374151", color:"#fff" }}
                             labelFormatter={(l)=>new Date(l).toDateString()} />
                    <Line type="monotone" dataKey="count" dot={false} stroke="#60A5FA" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle>Top Countries</CardTitle></CardHeader>
            <CardContent className="h-64">
              {loading ? <Skeleton className="h-full w-full"/> : (
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={countrySeries} layout="vertical" margin={{ left: 24, right: 16 }}>
                    <CartesianGrid stroke="#374151" strokeDasharray="3 3" />
                    <XAxis type="number" allowDecimals={false} stroke="#E5E7EB" tick={{ fill: "#E5E7EB" }}/>
                    <YAxis type="category" dataKey="country" width={110} stroke="#E5E7EB" tick={{ fill: "#E5E7EB" }}/>
                    <Tooltip contentStyle={{ background: "#111827", border:"1px solid #374151", color:"#fff" }} />
                    <Bar dataKey="count" fill="#60A5FA" />
                  </BarChart>
                </ResponsiveContainer>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Table */}
        <Card>
          <CardHeader><CardTitle>Contacts ({filtered.length})</CardTitle></CardHeader>
          <CardContent className="overflow-x-auto">
            {error && (
              <div className="mb-4 rounded-md border border-red-800 bg-red-900/30 p-3 text-sm text-red-100">
                Error: {error} <Button size="sm" variant="outline" className="ml-2" onClick={refresh}>Retry</Button>
              </div>
            )}
            <div className="max-h-[540px] overflow-auto rounded-md border border-gray-700">
              <table className="w-full text-sm">
                <thead className="sticky top-0 bg-gray-800/80 backdrop-blur">
                  <tr>
                    <Th label="Name" onClick={()=>toggleSort("lastName")} active={sortKey==="lastName"} dir={sortDir}/>
                    <Th label="Email" onClick={()=>toggleSort("email")} active={sortKey==="email"} dir={sortDir}/>
                    <Th label="Country" onClick={()=>toggleSort("country")} active={sortKey==="country"} dir={sortDir}/>
                    <Th label="Company" onClick={()=>toggleSort("companyName")} active={sortKey==="companyName"} dir={sortDir}/>
                    <Th label="Created" onClick={()=>toggleSort("createdAt")} active={sortKey==="createdAt"} dir={sortDir}/>
                  </tr>
                </thead>
                <tbody>
                  {loading ? Array.from({length:8}).map((_,i)=>(
                    <tr key={i} className="border-t border-gray-700"><td colSpan={5}><Skeleton className="h-9 w-full"/></td></tr>
                  )) : paged.length ? paged.map((c, i) => (
                    <tr
                      key={`${c._id||i}-${i}`}
                      className="border-t border-gray-700 hover:bg-gray-800/60 cursor-pointer"
                      onClick={()=>setOpenDrawer(c)}
                    >
                      <td className="px-3 py-2 text-white">{c.firstName} {c.lastName}</td>
                      <td className="px-3 py-2 text-white">{c.email}</td>
                      <td className="px-3 py-2 text-white">{c.country}</td>
                      <td className="px-3 py-2 text-white">{c.companyName || <Badge>—</Badge>}</td>
                      <td className="px-3 py-2 text-white">{fmt(c.createdAt)}</td>
                    </tr>
                  )) : (
                    <tr><td colSpan={5} className="p-6 text-center text-white/70">No contacts found.</td></tr>
                  )}
                </tbody>
              </table>
            </div>
            {/* Pagination */}
            <div className="mt-3 flex items-center justify-between gap-3 text-sm">
              <div className="text-white/80">Page {currentPage} of {totalPages}</div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" disabled={currentPage===1} onClick={()=>setPage(1)}>First</Button>
                <Button variant="outline" size="sm" disabled={currentPage===1} onClick={()=>setPage(p=>Math.max(1,p-1))}>Prev</Button>
                <Button variant="outline" size="sm" disabled={currentPage===totalPages} onClick={()=>setPage(p=>Math.min(totalPages,p+1))}>Next</Button>
                <Button variant="outline" size="sm" disabled={currentPage===totalPages} onClick={()=>setPage(totalPages)}>Last</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Drawer */}
        {openDrawer && (
          <div className="fixed inset-0 z-40 bg-black/60" onClick={()=>setOpenDrawer(null)}>
            <div className="absolute inset-x-0 bottom-0 z-50 rounded-t-2xl bg-gray-900 border-t border-gray-700" onClick={(e)=>e.stopPropagation()}>
              <div className="p-4 border-b border-gray-700"><h3 className="text-lg font-semibold text-white">Contact Details</h3></div>
              <div className="px-6 pb-6 grid gap-4 sm:grid-cols-2">
                <Field label="Name" icon={<User className="h-4 w-4 text-white/70"/>} value={`${openDrawer.firstName} ${openDrawer.lastName}`} copy/>
                <Field label="Email" icon={<Mail className="h-4 w-4 text-white/70"/>} value={openDrawer.email} copy/>
                <Field label="Country" icon={<Globe className="h-4 w-4 text-white/70"/>} value={openDrawer.country} />
                <Field label="Company" icon={<Building2 className="h-4 w-4 text-white/70"/>} value={openDrawer.companyName || "—"} />
                <div className="sm:col-span-2">
                  <Label>Project Description</Label>
                  <p className="mt-1 rounded-md border border-gray-700 bg-gray-800/60 p-3 text-sm leading-relaxed text-white">{openDrawer.projectDescription}</p>
                </div>
                <Field label="Created" value={fmt(openDrawer.createdAt)} />
                <Field label="Updated" value={fmt(openDrawer.updatedAt)} />
              </div>
            </div>
          </div>
        )}

        {/* Add Contact Modal */}
        {openAdd && (
          <div className="fixed inset-0 z-40 bg-black/60 flex items-center justify-center p-4" onClick={()=>setOpenAdd(false)}>
            <div className="w-full max-w-lg rounded-2xl bg-gray-900 border border-gray-700" onClick={(e)=>e.stopPropagation()}>
              <div className="p-4 border-b border-gray-700"><h3 className="text-lg font-semibold text-white">New Contact</h3></div>
              <form onSubmit={submitForm} className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input id="firstName" value={form.firstName} onChange={e=>setForm(f=>({...f, firstName:e.target.value}))} required />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input id="lastName" value={form.lastName} onChange={e=>setForm(f=>({...f, lastName:e.target.value}))} required />
                </div>
                <div className="sm:col-span-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" type="email" value={form.email} onChange={e=>setForm(f=>({...f, email:e.target.value}))} required />
                </div>
                <div>
                  <Label htmlFor="country">Country *</Label>
                  <Input id="country" value={form.country} onChange={e=>setForm(f=>({...f, country:e.target.value}))} required />
                </div>
                <div>
                  <Label htmlFor="companyName">Company</Label>
                  <Input id="companyName" value={form.companyName} onChange={e=>setForm(f=>({...f, companyName:e.target.value}))} />
                </div>
                <div className="sm:col-span-2">
                  <Label htmlFor="projectDescription">Project Description *</Label>
                  <Input id="projectDescription" value={form.projectDescription} onChange={e=>setForm(f=>({...f, projectDescription:e.target.value}))} required />
                </div>
                <div className="sm:col-span-2 flex justify-end gap-2 pt-2">
                  <Button variant="outline" type="button" onClick={()=>setOpenAdd(false)}>Cancel</Button>
                  <Button type="submit" disabled={saving}>{saving ? "Saving..." : "Save"}</Button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
