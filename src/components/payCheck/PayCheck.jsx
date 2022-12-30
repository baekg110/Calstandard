export function Dutch(users, pays) {
  let result = {};

  // 1. 사용자 이름과 내역을 확인할 수 있는 결과 객체 생성
  for (const user of users) {
    result[user.name] = [];
  }

  // 2. 결제 항목을 돌면서 각 사용자 별 결제 정보 저장
  for (const pay of pays) {
    const payResult = {
      name: pay.price,
      price: pay.price,
      member: pay.users.length,
      priceper: parseInt(pay.price / pay.users.length),
    };
    pay.users.map((user) => result[user.name].push(payResult));
  }

  //
  for (const key of Object.keys(result)) {
    console.log('멤버:', key);
    console.log(
      '전체금액:',
      result[key].map((el) => el.priceper).reduce((a, b) => a + b, 0)
    );
    console.log('항목:', result[key]);
  }
}
