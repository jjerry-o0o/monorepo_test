// import { useEffect, useState } from 'react';

import { useCategories } from '@/api/useInfoApi';

// import type { Category } from '@/types/info';

const Main = () => {
  // const [categories, setCategories] = useState<Category[]>([]);
  const { data: CategoryData } = useCategories();

  // useEffect(() => {
  // if (CategoryData) setCategories(CategoryData);
  // }, [CategoryData]);

  return (
    <>
      <table>
        <thead>
          <th>날짜</th>
          <th>항목</th>
          <th>수입</th>
          <th>저축</th>
          <th>지출</th>
          <th>카테고리</th>
          <th>결제수단</th>
          <th>메모</th>
          <th>열 추가</th>
        </thead>
        <tbody>
          <tr>
            <td>
              <input type="date" />
            </td>
            <td>
              <input type="text" />
            </td>
            <td>
              <input type="number" />
            </td>
            <td>
              <input type="number" />
            </td>
            <td>
              <input type="number" />
            </td>
            <td>
              <select name="category" id="sel_category"></select>
            </td>
            <td>
              <select name="paymentType" id="sel_paymentType"></select>
            </td>
            <td>
              <input type="text" />
            </td>
            <td>
              <button>삽입</button>
            </td>
          </tr>
        </tbody>
      </table>

      <p>카테고리 관리</p>
      {CategoryData?.map(category => (
        <div key={category.id}>
          <input type="text" value={category.title} />
        </div>
      ))}
      <input type="text" />
      <button>추가</button>

      <p>결제수단 관리</p>
      <input type="text" />
      <button>추가</button>
    </>
  );
};

export { Main };
