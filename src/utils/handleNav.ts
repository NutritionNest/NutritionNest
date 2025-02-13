const handleNav = (setCurrentPage, route) => {
  return () => setCurrentPage(route);
};

export default handleNav;
