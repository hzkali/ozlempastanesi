export interface MenuItem {
  name: string;
  price: string;
  description?: string;
}

export interface MenuCategory {
  title: string;
  items: MenuItem[];
}

export const menuData: MenuCategory[] = [
  {
    title: "Pastalar",
    items: [
      { name: "Tek Kişilik Pasta", price: "Güncel fiyat için arayınız" },
      { name: "4 Kişilik Pasta", price: "Güncel fiyat için arayınız" },
      { name: "Baton Pasta", price: "Güncel fiyat için arayınız" },
      { name: "Ekler Porsiyon (5 Adet)", price: "Güncel fiyat için arayınız" }
    ]
  },
  {
    title: "Sütlü Tatlılar",
    items: [
      { name: "Sütlaç", price: "Güncel fiyat için arayınız" },
      { name: "Supangle", price: "Güncel fiyat için arayınız" },
      { name: "Islak Kek", price: "Güncel fiyat için arayınız" },
      { name: "Sütlü Nuriye Porsiyon", price: "Güncel fiyat için arayınız" },
      { name: "Triliçe", price: "Güncel fiyat için arayınız" }
    ]
  },
  {
    title: "Tuzlular",
    items: [
      { name: "Poğaça-Simit", price: "Güncel fiyat için arayınız" },
      { name: "Sandviç", price: "Güncel fiyat için arayınız" },
      { name: "Pizza", price: "Güncel fiyat için arayınız" },
      { name: "Dereotlu", price: "Güncel fiyat için arayınız" },
      { name: "Kıymalı Kol Böreği", price: "Güncel fiyat için arayınız" },
      { name: "Peynir-Patates Kol Böreği", price: "Güncel fiyat için arayınız" }
    ]
  },
  {
    title: "Şerbetliler",
    items: [
      { name: "Cevizli Baklava", price: "Güncel fiyat için arayınız" },
      { name: "C.Baklava Çeşit", price: "Güncel fiyat için arayınız" },
      { name: "Kadayıf Dolması (2 Adet)", price: "Güncel fiyat için arayınız" },
      { name: "Burma Kadayıf", price: "Güncel fiyat için arayınız" },
      { name: "Şeker Pare", price: "Güncel fiyat için arayınız" },
      { name: "Tulumba (6 Adet)", price: "Güncel fiyat için arayınız" }
    ]
  },
  {
    title: "İçecekler",
    items: [
      { name: "Çay", price: "Güncel fiyat için arayınız" },
      { name: "Türk Kahvesi", price: "Güncel fiyat için arayınız" },
      { name: "Sütlü Türk Kahvesi", price: "Güncel fiyat için arayınız" },
      { name: "Menengiç", price: "Güncel fiyat için arayınız" },
      { name: "Dibek", price: "Güncel fiyat için arayınız" },
      { name: "Damla Sakızlı Dibek", price: "Güncel fiyat için arayınız" },
      { name: "Meyve Suyu", price: "Güncel fiyat için arayınız" },
      { name: "Su", price: "Güncel fiyat için arayınız" }
    ]
  }
];
