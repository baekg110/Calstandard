export default function PayCheck(users, pays) {
  let result = {};

  // 1. 사용자 이름과 내역을 확인할 수 있는 결과 객체 생성
  for (const user of users) {
    result[user] = [];
  }
  // 2. 결제 항목을 돌면서 각 사용자 별 결제 정보 저장
  for (const pay of pays) {
    const payResult = {
      name: pay.name,
      price: pay.price,
      member: pay.users.length,
      priceper: parseInt(pay.price / pay.users.length),
    };
    pay.users.map((user) => result[user].push(payResult));
  }

  return result;
}
