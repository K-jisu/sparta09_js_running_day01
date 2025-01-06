// ## 6. 장바구니 뒤바뀜 문제

// 아래 코드는 두 명의 유저(유저 A, 유저 B)가 각각 장바구니를 가지고 있다고 가정한 예시입니다.

// B 유저에게 할인 쿠폰을 적용하려고 applyCoupon 함수를 만들었습니다.

function applyCoupon(cart, coupon) {
  cart.items.forEach((item) => {
    item.price -= coupon.discount;
  });
}

const userACart = {
  items: [
    { name: "키보드", price: 30000 },
    { name: "마우스", price: 20000 },
  ],
};

// const userBCart = userACart;
const coupon = { discount: 5000 };

// applyCoupon(userBCart, coupon);

// 1.	실행 결과로 userACart.items와 userBCart.items는 각각 어떻게 달라져 있을까요?
//    A카트 B카트 둘다 5000원씩 할인된 값이 적용되었다.

// 2.	1번의 결과에 대한 이유를 설명해보세요.
//    const userBCart = userACart; 이때 userACart의 주소값을 할당해 주었기 때문에 A의 주소값의 값이 변경되었다.

// 3.	원래 의도대로라면 유저 A와 유저 B 장바구니가 독립적으로 동작해야 하는데, 그렇게 하려면 코드를 어떻게 수정해야 할까요?

// var copyObjectDeep = function (target) {
//   var result = {};
//   if (typeof target === "object" && target !== null) {
//     for (var prop in target) {
//       result[prop] = copyObjectDeep(target[prop]);
//     }
//   } else {
//     result = target;
//   }
//   return result;
// };




const userBCart = JSON.parse(JSON.stringify(userACart))


console.log("할인 전", userACart, userBCart);
console.log(userACart === userBCart)

applyCoupon(userBCart, coupon);
console.log("할인 후", userACart, userBCart)

