// import { useEffect, useState } from 'react';

import { useUserInfoList } from '@/api/useInfoApi';

// import type { User } from '@/types/info';

const Main = () => {
  // const [user, setUser] = useState<User[]>([]);
  const { data } = useUserInfoList();
  console.log('data', data);

  // useEffect(() => {
  //   if (data) setUser(data);
  // }, [data]);

  return (
    <>
      {data?.map(item => (
        <p key={item.id}>
          ${item.id} 번 사용자 이름 ${item.name}
        </p>
      ))}
    </>
  );
};

export { Main };
