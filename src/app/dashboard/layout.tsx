import { NavBar } from "./_components/NavBar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-accent/5 min-h-screen">
      <NavBar />
      {children}
    </div>
  );
};

export default DashboardLayout;
