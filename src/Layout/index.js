const Layout = (props) => {
  const { children } = props;

  return (
    <div className="layout w-screen h-screen">
      <nav className="w-screen h-[60px] bg-[#333333] fixed top-0 left-0 p-4 flex items-center text-[#f0f0f0]">
        <div className="cursor-pointer">HOME</div>
        <div className="ml-4 cursor-pointer">ABOUT</div>
        <div className="ml-4 cursor-pointer">CONTACT</div>
      </nav>
      <div className="content w-screen h-screen flex justify-center items-center">{ children }</div>
    </div>
  )
}

export default Layout;
