import Routers from "../routers/routers";

const Layout = () => {
  return (
    <div className="overflow-x-hidden overflow-y-hidden">
      <div className="min-h-[80vh]">
        <Routers />
      </div>
    </div>
  );
};

export default Layout;
