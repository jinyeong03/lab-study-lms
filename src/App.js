import React, { useState, useEffect } from 'react';
import { 
  LayoutDashboard, 
  BookOpen, 
  History, 
  Bell, 
  User, 
  CheckCircle2, 
  AlertCircle, 
  Clock, 
  ChevronRight, 
  FileText, 
  Users, 
  BarChart3, 
  ShieldCheck,
  PlusCircle,
  Upload,
  Search,
  ArrowLeft,
  XCircle,
  Download,
  PlayCircle,
  PauseCircle,
  RotateCcw,
  Filter,
  Calendar,
  UserPlus,
  PieChart,
  TrendingUp,
  MoreVertical,
  Check,
  Settings,
  ShieldAlert,
  LogOut,
  Building
} from 'lucide-react';

const App = () => {
  const [role, setRole] = useState('student');
  const [activeTab, setActiveTab] = useState('dashboard');
  const [subPage, setSubPage] = useState(null); 
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedMember, setSelectedMember] = useState(null);
  const [selectedElearningTag, setSelectedElearningTag] = useState('전체');
  const [reportFilter, setReportFilter] = useState('전체');
  const [approvalTab, setApprovalTab] = useState('pending');

  // 가상 데이터
  const elearningCourses = [
    { id: 1, title: '2024 연구실 안전사고 예방 가이드', instructor: '박안전 교수', duration: '45:00', progress: 85, thumbnail: 'bg-indigo-100', category: '필수 교육' },
    { id: 2, title: '화학 물질 누출 시 비상 대응 매뉴얼', instructor: '이대응 책임연구원', duration: '30:00', progress: 45, thumbnail: 'bg-rose-100', category: '화학 특화' },
    { id: 3, title: '실험실 폐기물 적정 처리 방법', instructor: '환경안전팀', duration: '20:00', progress: 0, thumbnail: 'bg-emerald-100', category: '환경 교육' },
    { id: 4, title: '신규 연구원을 위한 MSDS 기초 교육', instructor: '김독성 박사', duration: '60:00', progress: 0, thumbnail: 'bg-amber-100', category: '신규 과정' },
  ];

  const userData = {
    name: "김화학", lab: "유기합성 연구실", totalHours: 32, targetHours: 50,
    breakdown: { group: 12, seminar: 8, cop: 4, elearning: 8 },
    activities: [
      { id: 1, type: '이러닝', title: '실험실 화재 안전 수칙', date: '2024-03-15', hours: 2, status: '승인' },
      { id: 2, type: '집합교육', title: '연구실 유해물질 취급 교육', date: '2024-03-10', hours: 4, status: '대기' },
    ]
  };

  const adminData = {
    totalMembers: 6, avgHours: 38.5, underPerformers: 2,
    members: [
      { id: 1, name: '김화학', hours: 32, percent: 64, status: '미달', lastActivity: '2024.03.15', role: '대학원생', studentId: '20241234' },
      { id: 2, name: '이원소', hours: 52, percent: 100, status: '충족', lastActivity: '2024.03.12', role: '대학원생', studentId: '20235678' },
      { id: 3, name: '박질소', hours: 45, percent: 90, status: '미달', lastActivity: '2024.03.10', role: '관리자', studentId: '20229012' },
      { id: 4, name: '최산소', hours: 50, percent: 100, status: '충족', lastActivity: '2024.03.08', role: '대학원생', studentId: '20243456' },
      { id: 5, name: '정헬륨', hours: 12, percent: 24, status: '미달', lastActivity: '2024.02.25', role: '대학원생', studentId: '20247890' },
      { id: 6, name: '강수소', hours: 55, percent: 100, status: '충족', lastActivity: '2024.03.14', role: '대학원생', studentId: '20231122' },
    ],
    stats: {
      yearly: [
        { year: '2022', hours: 42, rate: 84 },
        { year: '2023', hours: 48, rate: 96 },
        { year: '2024', hours: 38.5, rate: 77 },
      ],
      types: [
        { label: '이러닝', value: 45, color: 'bg-blue-500' },
        { label: '집합교육', value: 25, color: 'bg-emerald-500' },
        { label: '세미나', value: 20, color: 'bg-amber-500' },
        { label: 'CoP', value: 10, color: 'bg-purple-500' },
      ]
    },
    fullLog: [
      { name: '김화학', type: '이러닝', title: '실험실 안전 기초', date: '2024.03.15', hours: 2, status: '완료' },
      { name: '이원소', type: '집합교육', title: '유해화학물질 취급', date: '2024.03.12', hours: 4, status: '완료' },
      { name: '박질소', type: '세미나', title: '화학 안전 포럼', date: '2024.03.10', hours: 6, status: '완료' },
      { name: '최산소', type: '이러닝', title: 'MSDS 이해', date: '2024.03.08', hours: 2, status: '완료' },
      { name: '강수소', type: 'CoP', title: '실험 장비 스터디', date: '2024.03.05', hours: 1, status: '대기' },
    ],
    pendingApprovals: [
      { id: 101, name: '이원소', type: '외부 세미나', title: '정밀화학 세미나', hours: 4, date: '2024.03.14', file: 'cert.pdf' },
      { id: 102, name: '박질소', type: '스터디(CoP)', title: '안전 장비 스터디', hours: 1, date: '2024.03.13', file: 'report.png' },
      { id: 103, name: '김화학', type: '집합교육', title: '실험실 폐기물 관리', hours: 2, date: '2024.03.12', file: 'attendance.jpg' },
    ],
    approvalHistory: [
      { id: 201, name: '최산소', type: '이러닝', title: '연구실 소방 안전', hours: 2, date: '2024.03.10', result: '승인' },
      { id: 202, name: '정헬륨', type: '외부 세미나', title: '화학 물질 관리법', hours: 4, date: '2024.03.08', result: '반려', reason: '참석증 누락' },
      { id: 203, name: '강수소', type: '집합교육', title: '신규 연구원 교육', hours: 4, date: '2024.03.05', result: '승인' },
    ]
  };

  const Header = () => (
    <div className="bg-slate-900 text-white p-6 pt-12 pb-8 rounded-b-[2rem] shadow-lg mb-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-xl font-bold flex items-center gap-2">
            <ShieldCheck className="text-emerald-400" />
            성실대 화학안전 LMS
          </h1>
          <p className="text-xs text-slate-400 mt-1 font-medium">{userData.lab} • {role === 'student' ? '대학원생' : '관리자'}</p>
        </div>
        <button 
          onClick={() => { setRole(role === 'student' ? 'admin' : 'student'); setSubPage(null); setActiveTab('dashboard'); }} 
          className="text-[10px] bg-white/10 px-3 py-1.5 rounded-full border border-white/20 font-bold active:bg-white/20 transition-all"
        >
          {role === 'student' ? '관리자 모드' : '학생 모드'}
        </button>
      </div>
      
      {role === 'student' ? (
        <div className="space-y-4 font-bold">
          <div className="flex justify-between items-end">
            <div>
              <p className="text-slate-400 text-sm font-medium">현재 이수 시간</p>
              <h2 className="text-3xl font-bold mt-1 tracking-tight">{userData.totalHours} <span className="text-sm font-normal text-slate-400">/ 50h</span></h2>
            </div>
            <span className="text-emerald-400 font-bold text-2xl">{Math.floor((userData.totalHours/50)*100)}%</span>
          </div>
          <div className="w-full bg-slate-700 h-2.5 rounded-full overflow-hidden">
            <div className="bg-gradient-to-r from-emerald-500 to-teal-400 h-full transition-all duration-1000" style={{ width: `${(userData.totalHours/50)*100}%` }}></div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-4 animate-in fade-in duration-500">
          <div className="text-center">
            <p className="text-slate-400 text-[10px] mb-1 font-bold uppercase tracking-wider">Members</p>
            <p className="text-xl font-bold">{adminData.totalMembers}명</p>
          </div>
          <div className="text-center border-x border-white/10">
            <p className="text-slate-400 text-[10px] mb-1 font-bold uppercase tracking-wider">Avg Hours</p>
            <p className="text-xl font-bold text-emerald-400">{adminData.avgHours}h</p>
          </div>
          <div className="text-center">
            <p className="text-slate-400 text-[10px] mb-1 font-bold uppercase tracking-wider">Pending</p>
            <p className="text-xl font-bold text-amber-400">{adminData.pendingApprovals.length}건</p>
          </div>
        </div>
      )}
    </div>
  );

  // --- 어드민: 대시보드 (수정됨: 컴포넌트 실종 방지) ---
  const AdminDashboard = () => (
    <div className="px-6 pb-24 animate-in slide-in-from-bottom-5 duration-500">
      <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 mb-8">
        <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
          <AlertCircle size={18} className="text-red-500" />
          승인 대기 활동 <span className="text-red-500 font-bold">12</span>
        </h3>
        <div className="space-y-4">
          {adminData.pendingApprovals.slice(0, 2).map(item => (
            <div key={item.id} className="bg-slate-50 p-4 rounded-2xl border border-slate-100 transition-all active:scale-[0.98]">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <p className="text-sm font-bold text-slate-800">{item.name} 연구원</p>
                  <p className="text-[11px] text-slate-500 mt-1">{item.type} • {item.date}</p>
                </div>
                <p className="text-emerald-600 font-bold text-sm">+{item.hours}h</p>
              </div>
              <div className="flex gap-2 mt-4">
                <button 
                  onClick={() => { setApprovalTab('pending'); setActiveTab('history'); }} 
                  className="flex-1 bg-white border border-slate-200 py-2.5 rounded-xl text-[11px] font-bold text-slate-600 active:bg-slate-50"
                >
                  상세보기
                </button>
                <button 
                  onClick={() => alert('승인되었습니다.')} 
                  className="flex-1 bg-emerald-500 text-white py-2.5 rounded-xl text-[11px] font-bold active:bg-emerald-600"
                >
                  즉시 승인
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold text-slate-800 text-sm">연구실 이수 현황 요약</h3>
        <button onClick={() => setSubPage('admin_members')} className="text-[11px] font-bold text-slate-400 underline">더보기</button>
      </div>
      <div className="space-y-3">
        {adminData.members.slice(0, 3).map(member => (
          <div key={member.id} className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center font-bold text-slate-400 border border-slate-100">
                {member.name[0]}
              </div>
              <div>
                <p className="text-sm font-bold text-slate-800">{member.name}</p>
                <p className="text-[10px] font-bold text-slate-400">이수 {member.hours}h ({member.percent}%)</p>
              </div>
            </div>
            <p className={`text-[10px] font-bold px-3 py-1 rounded-lg ${member.status === '미달' ? 'bg-red-50 text-red-500' : 'bg-emerald-50 text-emerald-500'}`}>
              {member.status}
            </p>
          </div>
        ))}
      </div>
    </div>
  );

  // --- 어드민: 연도별 통계 (막대그래프 추가) ---
  const AdminAnnualStats = () => (
    <div className="absolute inset-0 bg-slate-50 z-50 overflow-y-auto px-6 pt-16 pb-32 animate-in slide-in-from-right duration-300">
      <button onClick={() => setSubPage(null)} className="mb-6 flex items-center gap-1 text-slate-500 font-bold text-sm">
        <ArrowLeft size={18} /> 보고서 관리
      </button>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h3 className="text-2xl font-bold text-slate-800 tracking-tight">연도별 통계</h3>
          <p className="text-[11px] text-slate-400 mt-1 font-semibold">연구실 교육 이수 데이터 트렌드</p>
        </div>
        <div className="p-3 bg-blue-100 text-blue-600 rounded-2xl">
          <TrendingUp size={24} />
        </div>
      </div>
      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-5 rounded-3xl shadow-sm border border-slate-100"><p className="text-[10px] text-slate-400 font-bold uppercase mb-1">평균 이수율</p><p className="text-xl font-bold text-blue-600">77.4%</p></div>
          <div className="bg-white p-5 rounded-3xl shadow-sm border border-slate-100"><p className="text-[10px] text-slate-400 font-bold uppercase mb-1">전년 대비</p><p className="text-xl font-bold text-emerald-500">+12.4%</p></div>
        </div>

        {/* 막대그래프 섹션 (42h, 48h, 38.5h) */}
        <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100">
          <div className="flex justify-between items-center mb-10 text-[10px] font-bold">
            <h4 className="text-sm font-bold text-slate-800">평균 이수 시간 추이</h4>
            <span className="text-slate-400">단위: 시간(h)</span>
          </div>
          <div className="flex items-end justify-around h-40 gap-4 mb-4 border-b border-slate-50 pb-2">
            {adminData.stats.yearly.map((item, i) => (
              <div key={i} className="flex flex-col items-center flex-1">
                <div className="relative w-full flex justify-center items-end h-full">
                  <div 
                    className={`w-10 rounded-t-xl transition-all duration-1000 shadow-md ${item.year === '2024' ? 'bg-blue-600 shadow-blue-200' : 'bg-slate-200'}`} 
                    style={{ height: `${(item.hours / 60) * 100}%` }}
                  >
                    <span className="absolute -top-7 left-1/2 -translate-x-1/2 text-[10px] font-bold text-slate-800 whitespace-nowrap">{item.hours}h</span>
                  </div>
                </div>
                <span className="mt-4 text-[11px] font-bold text-slate-400">{item.year}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100">
          <h4 className="text-sm font-bold text-slate-800 mb-8 text-center font-bold">2024 교육 유형별 비중</h4>
          <div className="flex items-center justify-between">
            <div className="relative w-32 h-32 rounded-full shadow-inner" style={{ background: 'conic-gradient(#3b82f6 0% 45%, #10b981 45% 70%, #f59e0b 70% 90%, #a855f7 90% 100%)' }}>
              <div className="absolute inset-4 bg-white rounded-full flex items-center justify-center flex-col shadow-sm">
                <span className="text-[10px] font-bold text-slate-400 uppercase">Ratio</span>
                <span className="text-sm font-bold text-slate-800">Type</span>
              </div>
            </div>
            <div className="flex-1 ml-8 space-y-3">
              {adminData.stats.types.map((type, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className={`w-2.5 h-2.5 rounded-full ${type.color}`}></div>
                    <span className="text-[11px] font-bold text-slate-500">{type.label}</span>
                  </div>
                  <span className="text-[11px] font-bold text-slate-800">{type.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // --- 어드민: 정보(마이페이지) ---
  const AdminInfoManagement = () => (
    <div className="px-6 pb-24 animate-in fade-in duration-500">
      <div className="text-center mb-8">
        <div className="relative inline-block">
          <div className="w-24 h-24 bg-white rounded-full mx-auto mb-4 border-4 border-slate-900 p-1 shadow-lg">
            <div className="w-full h-full bg-slate-100 rounded-full flex items-center justify-center overflow-hidden">
              <User size={48} className="text-slate-300 translate-y-2" />
            </div>
          </div>
          <div className="absolute bottom-4 right-0 bg-emerald-500 text-white p-1.5 rounded-full border-2 border-white shadow-sm font-bold">
            <ShieldCheck size={14} />
          </div>
        </div>
        <h3 className="text-xl font-bold text-slate-800">박관리 책임연구원</h3>
        <p className="text-slate-400 text-[11px] font-bold uppercase tracking-widest mt-1">Lab Chief Admin • ID: ADMIN-0042</p>
      </div>
      <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm mb-6">
        <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">현재 관리 연구실 정보</h4>
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 bg-blue-50 text-blue-500 rounded-2xl flex items-center justify-center">
            <Building size={24} />
          </div>
          <div>
            <p className="font-bold text-slate-800 text-sm">{userData.lab}</p>
            <p className="text-[10px] text-slate-400 font-bold">성실대학교 공과대학 화학공학과</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 mt-4 pt-4 border-t border-slate-50">
          <div><p className="text-[9px] font-bold text-slate-400 uppercase">인력 규모</p><p className="text-sm font-bold text-slate-800">{adminData.totalMembers}명 참여 중</p></div>
          <div><p className="text-[9px] font-bold text-slate-400 uppercase">안전 등급</p><div className="flex items-center gap-1"><div className="w-2 h-2 bg-emerald-500 rounded-full"></div><p className="text-sm font-bold text-slate-800 uppercase">우수 (A)</p></div></div>
        </div>
      </div>
      <div className="space-y-3 font-bold">
        <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1 mb-2">관리자 설정</h4>
        {[
          { icon: <Settings size={18} className="text-slate-400" />, label: '연구실 정보 및 운영 설정' },
          { icon: <Bell size={18} className="text-slate-400" />, label: '알림 및 승인 요청 수신 설정' },
          { icon: <ShieldAlert size={18} className="text-slate-400" />, label: '데이터 보호 및 보안 관리' },
          { icon: <LogOut size={18} className="text-red-400" />, label: '관리자 로그아웃', danger: true },
        ].map((item, i) => (
          <button key={i} className={`w-full p-5 bg-white rounded-2xl text-left flex items-center justify-between shadow-sm border border-slate-100 active:bg-slate-50 transition-colors ${item.danger ? 'text-red-500' : 'text-slate-800'}`}>
            <span className="flex items-center gap-3 text-xs font-bold">{item.icon} {item.label}</span>
            <ChevronRight size={18} className="text-slate-300 font-bold" />
          </button>
        ))}
      </div>
    </div>
  );

  // --- 어드민: 승인 관리 ---
  const AdminApprovalManagement = () => (
    <div className="px-6 pb-24 animate-in fade-in duration-500 font-bold">
      <div className="flex items-center justify-between mb-6 font-bold">
        <h3 className="text-lg font-bold text-slate-800 tracking-tight">승인 관리</h3>
        <div className="flex bg-slate-100 p-1 rounded-xl">
          <button onClick={() => setApprovalTab('pending')} className={`px-4 py-1.5 rounded-lg text-[11px] font-bold transition-all ${approvalTab === 'pending' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-400'}`}>대기</button>
          <button onClick={() => setApprovalTab('history')} className={`px-4 py-1.5 rounded-lg text-[11px] font-bold transition-all ${approvalTab === 'history' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-400'}`}>이력</button>
        </div>
      </div>
      <div className="space-y-4">
        {approvalTab === 'pending' ? (
          adminData.pendingApprovals.map(item => (
            <div key={item.id} className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm animate-in slide-in-from-bottom-2">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center font-bold text-slate-400 border border-slate-100">{item.name[0]}</div>
                  <div><p className="text-xs font-bold text-slate-800">{item.name} <span className="font-medium text-slate-400 ml-1">| {item.type}</span></p><p className="text-[11px] text-slate-500 mt-1 font-medium leading-tight">{item.title}</p></div>
                </div>
                <div className="text-right flex flex-col items-end"><span className="text-sm font-bold text-emerald-600">+{item.hours}h</span><p className="text-[9px] text-slate-400 font-bold mt-1 uppercase tracking-tighter">{item.date}</p></div>
              </div>
              <div className="flex gap-2">
                <button className="flex-1 py-2.5 bg-slate-50 text-slate-600 rounded-xl text-[11px] font-bold flex items-center justify-center gap-1 active:bg-slate-100 transition-all"><Search size={14} /> 증빙 확인</button>
                <button onClick={() => alert('승인되었습니다.')} className="flex-1 bg-emerald-500 text-white rounded-xl text-[11px] font-bold flex items-center justify-center gap-1 shadow-lg shadow-emerald-500/10 active:scale-95 transition-all"><Check size={14} /> 즉시 승인</button>
                <button onClick={() => alert('반려')} className="w-10 flex items-center justify-center bg-red-50 text-red-500 rounded-xl active:bg-red-100 transition-all"><XCircle size={18} /></button>
              </div>
            </div>
          ))
        ) : (
          adminData.approvalHistory.map(item => (
            <div key={item.id} className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex justify-between items-center opacity-80">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-xl ${item.result === '승인' ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-500'}`}>{item.result === '승인' ? <CheckCircle2 size={18} /> : <XCircle size={18} />}</div>
                <div><p className="text-xs font-bold text-slate-800">{item.name} <span className="font-medium text-slate-400">| {item.title}</span></p><p className="text-[10px] text-slate-400 font-bold mt-0.5">{item.date} • {item.result === '반려' ? `반려사유: ${item.reason}` : '최종 승인 완료'}</p></div>
              </div>
              <p className={`text-xs font-bold ${item.result === '승인' ? 'text-slate-700' : 'text-slate-300 line-through'}`}>+{item.hours}h</p>
            </div>
          ))
        )}
      </div>
    </div>
  );

  // --- 어드민: 기타 서브 페이지 (리포트, 구성원 관리) ---
  const AdminFullReport = () => (
    <div className="absolute inset-0 bg-slate-50 z-50 overflow-y-auto px-6 pt-16 pb-32 animate-in slide-in-from-right duration-300 font-bold">
      <button onClick={() => setSubPage(null)} className="mb-6 flex items-center gap-1 text-slate-500 font-bold text-sm"><ArrowLeft size={18} /> 보고서 관리</button>
      <div className="flex justify-between items-center mb-6"><div><h3 className="text-2xl font-bold text-slate-800 tracking-tight">전체 리포트</h3><p className="text-[11px] text-slate-400 mt-1 font-semibold">연구실 이수 데이터 통합 관리</p></div><div className="p-3 bg-emerald-100 text-emerald-600 rounded-2xl shadow-sm"><FileText size={24} /></div></div>
      <div className="flex gap-2 mb-6 -mx-1 px-1 font-bold">
        {['전체', '이러닝', '집합교육', '세미나'].map((filter) => (
          <button key={filter} onClick={() => setReportFilter(filter)} className={`flex-1 py-2 rounded-xl text-[11px] font-bold shadow-sm transition-all ${reportFilter === filter ? 'bg-slate-900 text-white' : 'bg-white text-slate-500 border border-slate-100'}`}>{filter}</button>
        ))}
      </div>
      <div className="space-y-3">
        {adminData.fullLog.filter(log => reportFilter === '전체' || log.type === reportFilter).map((item, i) => (
          <div key={i} className="bg-white p-5 rounded-[2rem] border border-slate-100 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-400 border border-slate-50">{item.name[0]}</div>
                <div><h4 className="text-xs font-bold text-slate-800">{item.title}</h4><p className="text-[10px] text-slate-400 font-bold mt-1 tracking-tight">{item.name} • {item.type} • {item.date}</p></div>
              </div>
              <div className="text-right flex flex-col items-end font-bold">
                <span className="text-sm font-bold text-slate-800 leading-none">+{item.hours}h</span>
                <span className={`text-[9px] font-bold mt-1.5 px-2 py-0.5 rounded-full ${item.status === '완료' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'}`}>{item.status}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const AdminMemberManagement = () => (
    <div className="absolute inset-0 bg-slate-50 z-50 overflow-y-auto px-6 pt-16 pb-32 animate-in slide-in-from-right duration-300 font-bold">
      <button onClick={() => setSubPage(null)} className="mb-6 flex items-center gap-1 text-slate-500 font-bold text-sm"><ArrowLeft size={18} /> 보고서 관리</button>
      <div className="flex justify-between items-center mb-6"><div><h3 className="text-2xl font-bold text-slate-800 tracking-tight">구성원 현황</h3><p className="text-[11px] text-slate-400 mt-1 font-semibold">연구원별 달성도 정밀 체크</p></div><button onClick={() => setSubPage('admin_add_member')} className="p-3 bg-purple-600 text-white rounded-2xl shadow-lg active:scale-90 transition-all shadow-purple-500/10 font-bold"><UserPlus size={24} /></button></div>
      <div className="space-y-4">
        {adminData.members.map(member => (
          <div key={member.id} className="bg-white p-5 rounded-[2rem] border border-slate-100 shadow-sm relative overflow-hidden group font-bold">
            {member.status === '미달' && <div className="absolute top-0 right-0 bg-red-500 text-white text-[9px] px-3 py-1 rounded-bl-xl font-bold tracking-tighter uppercase">Deficient</div>}
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center font-bold text-slate-400 border border-slate-100 text-sm">{member.name[0]}</div>
              <div className="flex-1">
                <div className="flex justify-between items-center"><h4 className="font-bold text-slate-800 text-sm">{member.name} 연구원</h4><p className="text-xs font-bold text-slate-400">{member.percent}%</p></div>
                <p className="text-[10px] text-slate-400 font-bold mt-1 tracking-wider uppercase font-bold">{member.role} • {member.studentId}</p>
              </div>
            </div>
            <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden mb-4"><div className={`h-full transition-all duration-1000 ${member.percent >= 100 ? 'bg-emerald-400' : 'bg-blue-400'}`} style={{ width: `${Math.min(member.percent, 100)}%` }}></div></div>
            <div className="flex gap-2">
              <button onClick={() => { setSelectedMember(member); setSubPage('admin_member_history'); }} className="flex-1 py-3 bg-slate-900 text-white rounded-xl text-[10px] font-bold active:bg-slate-800 transition-all shadow-md font-bold">이력 상세</button>
              <button className="flex-1 py-3 bg-white border border-slate-200 text-slate-500 rounded-xl text-[10px] font-bold active:bg-slate-50 transition-all font-bold">권한 수정</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const AdminAddMember = () => (
    <div className="absolute inset-0 bg-slate-50 z-[70] overflow-y-auto px-6 pt-16 pb-10 animate-in slide-in-from-bottom duration-300 font-bold">
      <button onClick={() => setSubPage('admin_members')} className="mb-6 flex items-center gap-1 text-slate-500 font-bold text-sm"><ArrowLeft size={18} /> 돌아가기</button>
      <h3 className="text-2xl font-bold text-slate-800 mb-2 tracking-tight">구성원 직접 추가</h3>
      <p className="text-slate-400 text-[11px] mb-8 font-medium">연구실 소속 새로운 연구원 등록</p>
      <div className="space-y-6">
        <div className="space-y-2"><label className="text-[10px] font-bold text-slate-400 uppercase ml-1">연구원 이름</label><input className="w-full bg-white border border-slate-200 p-4 rounded-2xl text-sm shadow-sm outline-none" placeholder="이름 입력" /></div>
        <div className="space-y-2"><label className="text-[10px] font-bold text-slate-400 uppercase ml-1">학번 / 사번</label><input className="w-full bg-white border border-slate-200 p-4 rounded-2xl text-sm shadow-sm outline-none" placeholder="학번 8자리" /></div>
        <div className="space-y-2 font-bold"><label className="text-[10px] font-bold text-slate-400 uppercase ml-1">권한 설정</label>
          <div className="grid grid-cols-2 gap-3">
            <button className="py-4 rounded-2xl border-2 border-emerald-500 bg-emerald-50 text-emerald-700 font-bold text-xs">일반 대학원생</button>
            <button className="py-4 rounded-2xl border border-slate-200 bg-white text-slate-400 font-bold text-xs">연구실 관리자</button>
          </div>
        </div>
        <button onClick={() => { setSubPage('admin_members'); alert('새로운 구성원이 추가되었습니다.'); }} className="w-full bg-slate-900 text-white font-bold py-5 rounded-2xl shadow-xl active:scale-95 transition-all mt-6 tracking-tight">등록 완료</button>
      </div>
    </div>
  );

  const AdminMemberHistory = ({ member }) => (
    <div className="absolute inset-0 bg-slate-50 z-[70] overflow-y-auto px-6 pt-16 pb-32 animate-in slide-in-from-right duration-300 font-bold">
      <button onClick={() => setSubPage('admin_members')} className="mb-6 flex items-center gap-1 text-slate-500 font-bold text-sm font-bold"><ArrowLeft size={18} /> 목록으로</button>
      <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 mb-6 flex items-center gap-4">
        <div className="w-14 h-14 bg-slate-100 rounded-full flex items-center justify-center text-xl font-bold text-slate-400">{member?.name?.[0]}</div>
        <div><h3 className="text-xl font-bold text-slate-800">{member?.name} 연구원</h3><p className="text-xs text-slate-400 font-bold mt-1">{member?.studentId} • {userData.lab}</p></div>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm font-bold"><p className="text-[10px] text-slate-400 font-bold mb-1">총 인정 시간</p><p className="text-lg font-bold text-slate-800">{member?.hours} / 50h</p></div>
        <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm font-bold"><p className="text-[10px] text-slate-400 font-bold mb-1">달성률</p><p className="text-lg font-bold text-blue-500">{member?.percent}%</p></div>
      </div>
      <h4 className="font-bold text-slate-800 text-sm mb-4">교육 이수 상세 로그</h4>
      <div className="space-y-3">
        {adminData.fullLog.filter(log => log.name === member?.name).map((act, i) => (
          <div key={i} className="bg-white p-4 rounded-2xl border border-slate-50 flex justify-between items-center shadow-sm">
            <div><p className="text-[9px] font-bold text-emerald-500 uppercase tracking-wider mb-1">{act.type}</p><p className="text-xs font-bold text-slate-800">{act.title}</p><p className="text-[10px] text-slate-400 font-bold mt-1">{act.date}</p></div>
            <div className="text-right font-bold"><p className="text-sm font-bold text-slate-700">+{act.hours}h</p><button className="text-[9px] text-slate-400 underline mt-1 font-bold">증빙파일</button></div>
          </div>
        ))}
      </div>
    </div>
  );

  // --- 학생 서브 페이지 (대시보드, 등록, 이러닝 등) ---
  const StudentDashboard = () => (
    <div className="px-6 pb-24 animate-in fade-in duration-500 font-bold">
      <div className="grid grid-cols-2 gap-4 mb-8 font-bold">
        {[{ label: '집합교육', value: userData.breakdown.group, color: 'text-blue-500' }, { label: '외부 세미나', value: userData.breakdown.seminar, color: 'text-purple-500' }, { label: '스터디(CoP)', value: userData.breakdown.cop, color: 'text-orange-500' }, { label: '이러닝', value: userData.breakdown.elearning, color: 'text-emerald-500' }].map((item, idx) => (
          <div key={idx} className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 font-bold"><p className="text-[10px] text-slate-400 mb-1 font-bold uppercase tracking-wider">{item.label}</p><p className={`text-xl font-bold ${item.color}`}>{item.value} <span className="text-[10px] font-bold text-slate-300 ml-0.5 tracking-tight">hours</span></p></div>
        ))}
      </div>
      <div className="flex justify-between items-center mb-4 font-bold"><h3 className="font-bold text-slate-800 tracking-tight text-sm">최근 활동 내역</h3><button onClick={() => setActiveTab('history')} className="text-[11px] font-bold text-slate-400 uppercase tracking-tighter">전체보기</button></div>
      <div className="space-y-3 font-bold">
        {userData.activities.map(activity => (
          <div key={activity.id} className="bg-white p-4 rounded-2xl flex items-center justify-between border border-slate-50 shadow-sm font-bold"><div className="flex items-center gap-4"><div className={`p-2.5 rounded-xl ${activity.status === '승인' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'}`}>{activity.status === '승인' ? <CheckCircle2 size={18} /> : <Clock size={18} />}</div><div><p className="text-sm font-bold text-slate-800 leading-tight">{activity.title}</p><p className="text-[10px] text-slate-400 mt-0.5 font-bold">{activity.type} • {activity.date}</p></div></div><p className="font-bold text-slate-700 text-sm">+{activity.hours}h</p></div>
        ))}
      </div>
    </div>
  );

  const StudentManagement = () => (
    <div className="px-6 pb-24 animate-in slide-in-from-right-5 duration-300 font-bold tracking-tight">
      <h3 className="text-lg font-bold text-slate-800 mb-6 font-bold tracking-tight">교육 유형 선택</h3>
      <div className="grid grid-cols-1 gap-4 font-bold tracking-tight">
        {[{ id: 'elearning', title: '이러닝 수강', desc: '온라인 안전 교육 영상 시청', icon: <PlayCircle className="text-emerald-500" />, highlight: true }, { id: 'group', title: '집합교육 등록', desc: '세미나실 등 오프라인 단체 교육', icon: <Users className="text-blue-500" /> }, { id: 'seminar', title: '외부 세미나 등록', desc: '학회, 타 기관 안전 세미나 참석', icon: <FileText className="text-purple-500" /> }, { id: 'cop', title: '스터디(CoP) 활동 등록', desc: '연구원 3인 이상 안전 활동 보고', icon: <BookOpen className="text-orange-500" /> }].map(item => (
          <button key={item.id} onClick={() => { if (item.id === 'elearning') setSelectedElearningTag('전체'); setSubPage(item.id); }} className={`flex items-center justify-between p-5 bg-white rounded-2xl border shadow-sm transition-all active:scale-95 group font-bold tracking-tight ${item.highlight ? 'border-emerald-500 ring-4 ring-emerald-500/5' : 'border-slate-100'}`}><div className="flex items-center gap-4 text-left font-bold tracking-tight"><div className="p-3 bg-slate-50 rounded-2xl group-hover:scale-110 transition-transform font-bold">{item.icon}</div><div><p className="font-bold text-slate-800 text-sm font-bold tracking-tight">{item.title}</p><p className="text-[11px] text-slate-400 mt-1 font-medium font-bold tracking-tight">{item.desc}</p></div></div><ChevronRight size={18} className="text-slate-300 group-hover:text-emerald-400 transition-colors font-bold tracking-tight" /></button>
        ))}
      </div>
    </div>
  );

  const ElearningList = () => {
    const filteredCourses = selectedElearningTag === '전체' ? elearningCourses : elearningCourses.filter(course => course.category === selectedElearningTag);
    return (
      <div className="absolute inset-0 bg-slate-50 z-50 overflow-y-auto px-6 pt-16 pb-32 animate-in slide-in-from-right duration-300 font-bold">
        <button onClick={() => setSubPage(null)} className="mb-6 flex items-center gap-1 text-slate-500 font-bold text-sm"><ArrowLeft size={18} /> 유형 선택</button>
        <div className="flex justify-between items-center mb-6"><div><h3 className="text-2xl font-bold text-slate-800 tracking-tight">이러닝 센터</h3><p className="text-[11px] text-slate-400 mt-1 font-semibold">학습 진도율 80% 달성 시 자동 인정</p></div><div className="p-3 bg-emerald-100 text-emerald-600 rounded-2xl shadow-sm"><BookOpen size={24} /></div></div>
        <div className="space-y-6">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide -mx-1 px-1">{['전체', '필수 교육', '화학 특화', '신규 과정'].map((tag) => (
            <button key={tag} onClick={() => setSelectedElearningTag(tag)} className={`px-4 py-2 rounded-xl text-[11px] font-bold whitespace-nowrap transition-all shadow-sm ${selectedElearningTag === tag ? 'bg-slate-900 text-white' : 'bg-white text-slate-500 border border-slate-100'}`}>{tag}</button>
          ))}</div>
          {filteredCourses.map((course) => (
            <div key={course.id} onClick={() => { setSelectedCourse(course); setSubPage('video'); }} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 active:scale-[0.98] group">
              <div className={`w-full aspect-video ${course.thumbnail} flex items-center justify-center relative`}><div className="p-4 bg-white/20 backdrop-blur-md rounded-full text-white shadow-lg scale-90 group-hover:scale-100 transition-transform"><PlayCircle size={40} /></div><span className="absolute bottom-3 right-3 bg-black/70 text-white text-[10px] px-2 py-0.5 rounded font-bold">45:00</span></div>
              <div className="p-4"><h4 className="font-bold text-slate-800 text-sm leading-snug line-clamp-1">{course.title}</h4><div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden mt-3"><div className={`h-full rounded-full ${course.progress >= 80 ? 'bg-emerald-400' : 'bg-blue-400'}`} style={{ width: `${course.progress}%` }}></div></div></div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const VideoPlayer = ({ course }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [mockProgress, setMockProgress] = useState(course?.progress || 0);
    useEffect(() => { let interval; if (isPlaying && mockProgress < 100) { interval = setInterval(() => { setMockProgress(prev => Math.min(prev + 1, 100)); }, 1000); } return () => clearInterval(interval); }, [isPlaying, mockProgress]);
    return (
      <div className="absolute inset-0 bg-black z-[60] flex flex-col animate-in fade-in duration-300 font-bold">
        <div className="p-6 flex items-center justify-between text-white bg-gradient-to-b from-black/90 to-transparent font-bold"><button onClick={() => setSubPage('elearning')} className="p-2 bg-white/10 rounded-full active:scale-90"><ArrowLeft size={20} /></button><p className="text-xs font-bold truncate px-4 opacity-80">{course?.title}</p><div className="w-10"></div></div>
        <div className="flex-1 flex items-center justify-center relative"><ShieldCheck size={64} className="text-white/10" /><div className="absolute inset-0 flex items-center justify-center"><button onClick={() => setIsPlaying(!isPlaying)} className="p-5 bg-white/10 backdrop-blur-xl rounded-full text-white border border-white/20 active:scale-90 font-bold">{isPlaying ? <PauseCircle size={40} /> : <PlayCircle size={40} />}</button></div></div>
        <div className="bg-slate-900 p-8 pt-8 pb-12 rounded-t-[2.5rem] text-white">
          <div className="flex justify-between items-center mb-6"><div><p className="text-[10px] text-emerald-400 font-bold mb-1 uppercase tracking-widest">Training Content</p><h4 className="font-bold text-base leading-tight">{course?.title}</h4></div><div className="bg-white/10 text-white px-3 py-1 rounded-lg text-[10px] font-bold border border-white/10">{mockProgress}%</div></div>
          <div className="space-y-6">
            <div className="overflow-hidden h-1.5 flex rounded-full bg-white/10"><div style={{ width: `${mockProgress}%` }} className="shadow-none flex flex-col justify-center bg-emerald-500 transition-all duration-300"></div></div>
            <div className="grid grid-cols-3 gap-3">
               <button className="flex flex-col items-center gap-2 py-3 bg-white/5 rounded-2xl active:bg-white/10 font-bold"><RotateCcw size={16} className="text-slate-400" /><span className="text-[10px] font-bold text-slate-500">10초전</span></button>
               <button onClick={() => setIsPlaying(!isPlaying)} className="flex flex-col items-center gap-2 py-3 bg-emerald-50 rounded-2xl shadow-lg active:scale-95 transition-all"><PlayCircle size={16} className="text-emerald-600" /><span className="text-[10px] font-bold text-emerald-700">Play</span></button>
               <button className="flex flex-col items-center gap-2 py-3 bg-white/5 rounded-2xl active:bg-white/10 font-bold"><FileText size={16} className="text-slate-400" /><span className="text-[10px] font-bold text-slate-500">교재</span></button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const RegistrationForm = ({ type }) => (
    <div className="absolute inset-0 bg-slate-50 z-50 overflow-y-auto px-6 pt-16 pb-10 animate-in slide-in-from-right duration-300 font-bold">
      <button onClick={() => setSubPage(null)} className="mb-6 flex items-center gap-1 text-slate-500 font-bold text-sm font-bold"><ArrowLeft size={18} /> 뒤로가기</button>
      <h3 className="text-2xl font-bold text-slate-800 mb-2 tracking-tight">{type === 'cop' ? '스터디 활동' : '교육 이수'} 등록</h3>
      <p className="text-slate-400 text-[11px] mb-8 font-medium">관리자 확인을 위해 정확한 정보를 입력하세요.</p>
      <div className="space-y-6">
        <div className="space-y-2"><label className="text-[10px] font-bold text-slate-400 uppercase ml-1">교육/활동명</label><input className="w-full bg-white border border-slate-200 p-4 rounded-2xl text-sm shadow-sm outline-none" placeholder="교육 명칭 입력" /></div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2"><label className="text-[10px] font-bold text-slate-400 uppercase ml-1">날짜</label><input type="date" className="w-full bg-white border border-slate-200 p-4 rounded-2xl text-sm shadow-sm outline-none" /></div>
          <div className="space-y-2"><label className="text-[10px] font-bold text-slate-400 uppercase ml-1">인정 시간</label><input type="number" className="w-full bg-white border border-slate-200 p-4 rounded-2xl text-sm shadow-sm outline-none" placeholder="hours" /></div>
        </div>
        <div className="space-y-2"><label className="text-[10px] font-bold text-slate-400 uppercase ml-1 font-bold font-extrabold">증빙자료 업로드</label><div className="w-full bg-slate-100 border-2 border-dashed border-slate-200 py-12 rounded-3xl flex flex-col items-center justify-center text-slate-400 gap-3"><Upload size={32} /><p className="text-[10px] font-bold">파일 선택 (PDF, JPG)</p></div></div>
        <button onClick={() => { setSubPage(null); alert('등록 신청 완료.'); }} className="w-full bg-emerald-500 text-white font-bold py-5 rounded-2xl shadow-xl active:scale-95 transition-all mt-6 font-bold tracking-tight">등록 신청하기</button>
      </div>
    </div>
  );

  return (
    <div className="max-w-md mx-auto bg-slate-50 min-h-screen relative font-sans text-slate-900 overflow-hidden shadow-2xl border-x border-slate-200">
      {/* 서브 페이지 렌더링 */}
      {subPage === 'elearning' && <ElearningList />}
      {subPage === 'video' && <VideoPlayer course={selectedCourse} />}
      {subPage === 'admin_stats' && <AdminAnnualStats />}
      {subPage === 'admin_report' && <AdminFullReport />}
      {subPage === 'admin_members' && <AdminMemberManagement />}
      {subPage === 'admin_add_member' && <AdminAddMember />}
      {subPage === 'admin_member_history' && <AdminMemberHistory member={selectedMember} />}
      {(subPage && !['elearning', 'video', 'admin_stats', 'admin_report', 'admin_members', 'admin_add_member', 'admin_member_history'].includes(subPage)) && <RegistrationForm type={subPage} />}

      <Header />

      {/* 메인 콘텐츠 영역 */}
      {role === 'student' ? (
        <>
          {activeTab === 'dashboard' && <StudentDashboard />}
          {activeTab === 'manage' && <StudentManagement />}
          {activeTab === 'history' && (
            <div className="px-6 pb-24 font-bold">
              <h3 className="text-lg font-bold mb-6 tracking-tight text-sm font-bold">전체 교육 이력</h3>
              <div className="space-y-4 font-bold">
                {userData.activities.map(act => (
                  <div key={act.id} className="bg-white p-5 rounded-2xl border border-slate-100 flex justify-between items-center shadow-sm active:scale-[0.98]">
                    <div><p className="text-[10px] text-slate-400 mb-1 font-bold">{act.date} • {act.type}</p><p className="font-bold text-sm text-slate-800">{act.title}</p><div className="flex items-center gap-2 mt-3 font-bold"><span className={`text-[10px] px-2 py-0.5 rounded-full ${act.status === '승인' ? 'bg-emerald-100 text-emerald-600' : 'bg-amber-100 text-amber-600'}`}>{act.status}</span><button className="text-[10px] text-slate-400 font-bold underline decoration-slate-200">증빙 확인</button></div></div><p className="text-lg font-bold text-slate-700">+{act.hours}h</p>
                  </div>
                ))}
              </div>
            </div>
          )}
          {activeTab === 'mypage' && <div className="px-6 pb-24 text-center font-bold tracking-tight"><div className="w-24 h-24 bg-white rounded-full mx-auto mb-4 border-4 border-emerald-500 p-1 font-bold"><div className="w-full h-full bg-slate-100 rounded-full flex items-center justify-center overflow-hidden font-bold"><User size={48} className="text-slate-300 translate-y-2 font-bold" /></div></div><h3 className="text-xl font-bold">{userData.name}</h3><p className="text-slate-400 text-[11px] mb-8 font-bold">{userData.lab}</p><div className="space-y-3 font-bold"><button className="w-full p-5 bg-white rounded-2xl text-left font-bold flex items-center justify-between shadow-sm border border-slate-100 active:bg-slate-50 transition-colors"><span className="flex items-center gap-3 font-bold"><User size={18} className="text-slate-400 font-bold" /> 개인정보 수정</span><ChevronRight size={18} className="text-slate-300" /></button><button className="w-full p-5 bg-white rounded-2xl text-left font-bold flex items-center justify-between shadow-sm border border-slate-100 active:bg-slate-50 transition-colors font-bold"><span className="flex items-center gap-3 font-bold"><ShieldCheck size={18} className="text-slate-400 font-bold" /> 관리자 권한 이전</span><ChevronRight size={18} className="text-slate-300" /></button></div></div>}
        </>
      ) : (
        <>
          {activeTab === 'dashboard' && <AdminDashboard />}
          {activeTab === 'manage' && (
            <div className="px-6 pb-24 animate-in slide-in-from-right-5 font-bold tracking-tight">
              <h3 className="text-lg font-bold mb-6 tracking-tight text-sm font-bold">보고서 및 통계 센터</h3>
              <div className="grid grid-cols-2 gap-4 font-bold">
                {[
                  { id: 'admin_stats', title: '연도별 통계', icon: <BarChart3 className="text-blue-500 font-bold" /> },
                  { id: 'admin_report', title: '전체 리포트', icon: <FileText className="text-emerald-500 font-bold" /> },
                  { id: 'admin_members', title: '구성원 현황', icon: <Users className="text-purple-500 font-bold" /> },
                  { id: 'download', title: 'Excel 추출', icon: <Download className="text-red-400 font-bold" /> },
                ].map((item, i) => (
                  <button key={i} onClick={() => item.id !== 'download' && setSubPage(item.id)} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex flex-col items-center gap-4 active:scale-95 transition-all group font-bold"><div className="p-4 bg-slate-50 rounded-2xl group-hover:bg-blue-50">{item.icon}</div><p className="text-[11px] font-bold text-slate-700 uppercase tracking-tighter text-center">{item.title}</p></button>
                ))}
              </div>
            </div>
          )}
          {activeTab === 'history' && <AdminApprovalManagement />}
          {activeTab === 'mypage' && <AdminInfoManagement />}
        </>
      )}

      {/* 하단 내비게이션 바 */}
      <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white/95 backdrop-blur-2xl border-t border-slate-100 flex justify-around items-center py-4 px-2 pb-8 rounded-t-[2.5rem] shadow-[0_-10px_40px_rgba(0,0,0,0.05)] z-40 font-bold">
        {[
          { id: 'dashboard', label: '대시보드', icon: <LayoutDashboard size={20} /> },
          { id: 'manage', label: role === 'student' ? '교육관리' : '보고서', icon: role === 'student' ? <PlusCircle size={20} /> : <BarChart3 size={20} /> },
          { id: 'history', label: role === 'student' ? '이수이력' : '승인관리', icon: role === 'student' ? <History size={20} /> : <CheckCircle2 size={20} /> },
          { id: 'mypage', label: '정보', icon: <User size={20} /> }
        ].map(tab => (
          <button key={tab.id} onClick={() => { setSubPage(null); setActiveTab(tab.id); }} className={`flex flex-col items-center gap-2 transition-all font-bold ${activeTab === tab.id ? 'text-emerald-500 scale-105' : 'text-slate-300 hover:text-slate-400'}`}>
            <div className={`p-1.5 ${activeTab === tab.id ? 'bg-emerald-50 rounded-xl' : ''}`}>{tab.icon}</div><span className="text-[10px] font-bold tracking-tighter uppercase">{tab.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default App;