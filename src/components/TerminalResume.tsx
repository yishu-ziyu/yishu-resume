import React, { useState, useEffect } from 'react';
import { 
  Download, 
  Mail, 
  Phone, 
  ShieldCheck,
  Target,
  GraduationCap,
  BriefcaseBusiness,
  Layers
} from 'lucide-react';

// --- 数据同步自主站 resumeData.ts (带修正) ---
const RESUME_DATA = {
    profile: {
        name: '马浩宣',
        englishName: 'Max Ma',
        role: '经济学本科生 / 产品与商业分析方向',
        university: '华侨大学',
        major: '经济学（本科）',
        email: 'yishuziyu@foxmail.com',
        phone: '13310838384',
        location: '福建 / 深圳',
        summary: '我当前把产品构建、商业分析、数据验证和清晰表达放在同一条能力线上：既能做判断，也能把判断做成可展示、可交付的作品。'
    },
    judgment: "适合需要产品判断、商业分析和清晰表达同时在线的岗位。适合策划、营运、增长及 AI 产品方向。",
    fastFacts: [
        { label: '近一年绩点排名', value: 'Top 5%' },
        { label: '竞赛获奖经历', value: '3+' },
        { label: '带队训练人数', value: '30' }
    ],
    sections: [
        {
            title: 'EDUCATION_&_HONORS',
            icon: GraduationCap,
            items: [
                {
                    heading: '华侨大学 · 经济学（本科）',
                    sub: '辅修汉语言文学',
                    time: '2022.09 - 2026.07',
                    points: [
                        '近一年总绩点排名专业前 5%',
                        '2024 全国高校商业精英挑战赛商务谈判竞赛全国总决赛一等奖',
                        '2024 全国营销模拟决策赛道全国决赛二等奖',
                        '2025 “三创赛”福建赛区省级二等奖'
                    ]
                }
            ]
        },
        {
            title: 'WORK_EXPERIENCE',
            icon: BriefcaseBusiness,
            items: [
                {
                    heading: '深圳海坤投资管理有限公司',
                    sub: '行业研究分析师 & 代理招聘组长',
                    time: '2026.01 - Present',
                    points: [
                        '独立行研与商业洞察：撰写《中国AI Agent投资机会分析报告》，提出 PEV（规划-执行-验证）闭环作为 Agent 评判标准；拆解金蝶、用友等企业软件商业路径。',
                        '财务穿透与出海拆解：分析科大讯飞财报，论证其 65% 复合增长率背后的变现路径，预判其利润释放周期。',
                        '全流程招聘统筹：负责投资团队实习生全生命周期招聘，筛选 28 份简历，独立面试并成功转化 2 名候选人入职。'
                    ]
                },
                {
                    heading: '招商银行泉州分行战略部',
                    sub: '战略实习生',
                    time: '2026.02 - 2026.03',
                    points: [
                        '业务框架构建：快速掌握债券发行、保理等对公融资工具底层逻辑。',
                        '财务穿透：识别清源山旅游等项目账面亏损实为大额折旧，验证底层造血能力。',
                        '尽调协助：抓取泰禾资产重组项目关键要素，绘制股权结构图。'
                    ]
                }
            ]
        },
        {
            title: 'PROJECTS_&_SKILLS',
            icon: Layers,
            items: [
                {
                    heading: '求职面试复盘助手 (AI 面试 Copilot)',
                    sub: 'Product Build',
                    time: '2026',
                    points: [
                        '基于 LLM 开发，将非结构化对话录音自动转化为结构化能力评估矩阵。',
                        '熟练使用 Stata / SPSS 实证分析及 Excel 商业测算。',
                        '熟悉 AI IDE 与 Vibe Coding 工作流，可独立搭建产品原型。'
                    ]
                }
            ]
        }
    ]
};

const Typewriter = ({ text, delay = 0 }: { text: string; delay?: number }) => {
    const [visible, setVisible] = useState('');
    useEffect(() => {
        let i = 0;
        const timer = setTimeout(() => {
            const interval = setInterval(() => {
                setVisible(text.slice(0, i + 1));
                i++;
                if (i >= text.length) clearInterval(interval);
            }, 20);
        }, delay);
        return () => clearTimeout(timer);
    }, [text, delay]);
    return <span>{visible}</span>;
};

export const TerminalResume: React.FC = () => {
    return (
        <div className="min-h-screen bg-[#0F110C] text-[#D1D5DB] font-mono selection:bg-[#3E4C31] selection:text-[#E2E8F0] p-4 md:p-10 relative overflow-hidden">
            {/* CRT Scanline Effect */}
            <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,118,0.06))] bg-[length:100%_2px,3px_100%]" />
            
            <div className="max-w-5xl mx-auto border border-[#3E4C31]/30 bg-[#161B13]/40 backdrop-blur-md p-8 md:p-12 shadow-[0_0_60px_rgba(0,0,0,0.6)] relative">
                {/* Header */}
                <header className="mb-10 border-b border-[#3E4C31]/20 pb-10">
                    <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
                        <div className="flex-1">
                            <div className="text-[#6A9BCC] mb-2 text-[10px] tracking-[0.4em] uppercase opacity-70">
                                <Typewriter text="Init.Deployment_Node_Alpha" />
                            </div>
                            <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tighter mb-4">
                                <Typewriter text={RESUME_DATA.profile.name} delay={400} />
                                <span className="animate-pulse ml-1">_</span>
                            </h1>
                            <p className="text-lg text-[#788c5d] font-serif italic max-w-2xl">
                                <Typewriter text={RESUME_DATA.profile.role} delay={800} />
                            </p>
                        </div>
                        <div className="grid grid-cols-1 gap-2 text-[11px] text-[#A0AEC0] border-l border-[#3E4C31]/30 pl-6 h-full py-1">
                            <div className="flex items-center gap-3">
                                <Mail size={13} className="text-[#6A9BCC]" /> {RESUME_DATA.profile.email}
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone size={13} className="text-[#6A9BCC]" /> {RESUME_DATA.profile.phone}
                            </div>
                            <div className="flex items-center gap-3 text-[#788c5d] font-bold">
                                <ShieldCheck size={13} /> {RESUME_DATA.profile.university} · {RESUME_DATA.profile.major}
                            </div>
                        </div>
                    </div>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                    {/* Sidebar Area (Judgment & Stats) */}
                    <aside className="lg:col-span-3 space-y-8 order-last lg:order-first">
                        <div className="p-5 rounded-2xl border border-[#3E4C31]/30 bg-[#3E4C31]/5">
                            <div className="flex items-center gap-2 mb-4">
                                <Target size={14} className="text-[#6A9BCC]" />
                                <h4 className="text-[10px] font-bold tracking-widest text-[#788c5d] uppercase">
                                    Judgment
                                </h4>
                            </div>
                            <p className="text-[11px] leading-relaxed font-serif text-[#D1D5DB]/80 italic">
                                "{RESUME_DATA.judgment}"
                            </p>
                        </div>

                        <div className="space-y-3">
                            {RESUME_DATA.fastFacts.map(f => (
                                <div key={f.label} className="p-4 rounded-xl border border-[#3E4C31]/10 bg-black/20">
                                    <div className="text-xl font-bold text-white mb-1">{f.value}</div>
                                    <div className="text-[9px] text-[#A0AEC0] uppercase tracking-wider">{f.label}</div>
                                </div>
                            ))}
                        </div>
                        
                        <button 
                            onClick={() => window.print()}
                            className="w-full py-4 px-6 rounded-xl bg-[#D1D5DB] text-black font-bold text-[10px] tracking-widest flex items-center justify-center gap-3 hover:bg-[#6A9BCC] hover:text-white transition-all group"
                        >
                            <Download size={14} className="group-hover:animate-bounce" />
                            SYS.EXPORT_PDF
                        </button>
                    </aside>

                    {/* Main Content Area */}
                    <div className="lg:col-span-9 space-y-10 border-l border-[#3E4C31]/10 pl-2 lg:pl-8">
                        {RESUME_DATA.sections.map((section) => {
                            const Icon = section.icon;
                            return (
                                <section key={section.title} className="group relative">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="p-1.5 bg-[#3E4C31]/10 rounded-lg border border-[#3E4C31]/20 text-[#788c5d] group-hover:text-[#6A9BCC] transition-colors">
                                            <Icon size={16} />
                                        </div>
                                        <h2 className="text-xs font-black tracking-[0.4em] text-[#A0AEC0]/60 uppercase">
                                            {section.title}
                                        </h2>
                                    </div>
                                    <div className="space-y-8 pl-4 border-l border-[#3E4C31]/20 ml-3">
                                        {section.items.map((item, i) => (
                                            <div key={i} className="relative">
                                                <div className="absolute -left-[21px] top-1.5 w-1.5 h-1.5 rounded-sm bg-[#3E4C31] rotate-45" />
                                                <div className="flex flex-wrap justify-between items-baseline mb-2 gap-2">
                                                    <h3 className="text-lg font-bold text-white tracking-tight">
                                                        {item.heading}
                                                    </h3>
                                                    <span className="text-[9px] text-[#788c5d] font-mono whitespace-nowrap bg-[#3E4C31]/10 px-2 py-0.5 rounded">
                                                        {item.time}
                                                    </span>
                                                </div>
                                                {item.sub && <p className="text-[#6A9BCC] text-xs mb-3 font-semibold tracking-wide">{item.sub}</p>}
                                                <ul className="space-y-2.5">
                                                    {item.points.map((p, pi) => (
                                                        <li key={pi} className="text-[13px] text-[#D1D5DB]/90 font-serif leading-relaxed flex gap-3">
                                                            <span className="text-[#3E4C31] mt-1 shrink-0 font-mono select-none opacity-50">0{pi+1}</span>
                                                            {p}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            );
                        })}
                    </div>
                </div>

                {/* Footer */}
                <footer className="mt-16 pt-6 border-t border-[#3E4C31]/10 text-[9px] text-[#A0AEC0]/30 flex justify-between font-mono tracking-[0.2em]">
                    <div className="flex items-center gap-4">
                        <span>BUILD_STABLE_MAR_2026</span>
                        <span className="animate-pulse">● ONLINE</span>
                    </div>
                    <span>RESUME.YISHUZIYU.CN // ARCHIVE_V1.0</span>
                </footer>
            </div>
        </div>
    );
};
