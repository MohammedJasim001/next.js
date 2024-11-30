export default function DashboardLayout({
    children,
    users,
    notification,
    revenue,
    login,
  }: {
    children: React.ReactNode;
    users: React.ReactNode;
    notification: React.ReactNode;
    revenue: React.ReactNode;
    login: React.ReactNode;
  }) {
    const isLogin= true
    return isLogin?(

      <div>
        <div>{children}</div>
        <div>{users}</div>
        <div>{notification}</div>
        <div>{revenue}</div>
      </div>
    ):(
        login
    )
  }
  