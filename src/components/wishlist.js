import { useState } from "react";

// 초기 위시리스트를 빈 배열로 설정합니다.
const [wishlist, setWishlist] = useState([]);

// 위시리스트에 음식을 추가하는 함수
export function addToWishlistFood(foodItem) {
  setWishlist([...wishlist, foodItem]);
}

// 위시리스트에서 음식을 제거하는 함수
export function removeFromWishlistFood(foodSlug) {
  setWishlist(wishlist.filter((item) => item.명칭 !== foodSlug));
}

// 위시리스트에 문화를 추가하는 함수
export function addToWishlistCulture(cultureItem) {
  setWishlist([...wishlist, cultureItem]);
}

// 위시리스트에서 문화를 제거하는 함수
export function removeFromWishlistCulture(cultureSlug) {
  setWishlist(wishlist.filter((item) => item.명칭 !== cultureSlug));
}

// 위시리스트에 힐링을 추가하는 함수
export function addToWishlistHealing(healingItem) {
  setWishlist([...wishlist, healingItem]);
}

// 위시리스트에서 힐링을 제거하는 함수
export function removeFromWishlistHealing(healingSlug) {
  setWishlist(wishlist.filter((item) => item.명칭 !== healingSlug));
}

// 위시리스트의 모든 항목을 반환하는 함수
export function getWishlistItems() {
  return wishlist;
}
