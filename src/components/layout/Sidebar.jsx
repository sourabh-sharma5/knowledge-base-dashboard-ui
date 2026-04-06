import SidebarItem from "./SidebarItem";
import {
  Layers,
  Cpu,
  Library,
  Database,
  Server,
  List,
  Zap,
  Briefcase,
  Play,
  Shield,
  Key,
  Settings,
} from "lucide-react"; 

const Sidebar = () => {
  return (
    <div
      className="
      w-[260px]
      bg-[#F9FAFB]
      border-r
      h-full
      overflow-hidden
      px-3 py-2
      text-xs
      flex flex-col
    "
    >
       {/* MY PROJECTS */}
      <p className="text-gray-400 text-xs mb-1">MY PROJECTS</p>
      <div className="space-y-1">
        <SidebarItem icon={Layers} label="Agents" />
        <SidebarItem icon={Cpu} label="AI Models" />
        <SidebarItem icon={Library} label="Library" />
      </div>

      {/* ORCHESTRATOR */}
      <p className="text-gray-400 text-xs mb-1 mt-1">ORCHESTRATOR</p>
      <div className="space-y-1">
        <SidebarItem icon={Server} label="Published" />
        <SidebarItem icon={Database} label="Machines" />
        <SidebarItem icon={List} label="Queues" />
        <SidebarItem icon={Zap} label="Triggers" />
        <SidebarItem icon={Briefcase} label="Jobs" />
        <SidebarItem icon={Play} label="Executions" />
        <SidebarItem icon={Shield} label="Vault" />
      </div>

      {/* ACTIVE ITEM */}
      <div className="mt-1">
        <SidebarItem
          icon={Database}
          label="Knowledge Base"
          active
        />
      </div>

      <SidebarItem icon={Key} label="Key Store" />

      {/* ADMIN */}
      <p className="text-gray-400 text-xs">ADMIN</p>
      <div className="space-y-1">
        <SidebarItem icon={Settings} label="Tenant" />
        <SidebarItem icon={Settings} label="Integrations" />
      </div>
    </div>
  );
};

export default Sidebar;