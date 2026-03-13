import SideNav from '@/app/ui/dashboard/sidenav';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex' }}>
      <SideNav />
      <div style={{ padding: '20px', width: '100%' }}>
        {children}
      </div>
    </div>
  );
}