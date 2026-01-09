const SideBar = () => {
  return (
    <div className="flex flex-col h-screen">
      <button className="">대시보드</button>
      <button>수입/지출 작성</button>
      <button>주식 관리</button>
      <button>경제 이슈</button>
      <div className="flex">
        <button>사용자</button>
        <button>환경설정</button>
      </div>
    </div>
  );
};

export { SideBar };
