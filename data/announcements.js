import { convertToLink } from "../components/Functions";

export const ANNOUNCEMENT_DATA = [
  {
    id: 1,
    date: "November 14, 2022",
    title: "Diving to the deep",
    subText:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam suscipit aperiam porro eum enim officiis hic? Sunt ullam officia, totam explicabo, libero molestiae numquam assumenda neque quis dolore laborum. Nisi.",
    image:
      "https://images.unsplash.com/photo-1604134967494-8a9ed3adea0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    image2:
      "https://images.unsplash.com/photo-1598981457915-aea220950616?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1193&q=80",
    tags: "announcement",
    featured: true,
  },
  {
    id: 2,
    date: "July 14, 2022",
    title: "expcxxcblicabo, libero molestiae numquam",
    subText:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam suscipit aperiam porro eum enim officiis hic? Sunt ullam officia, totam explicabo, libero molestiae numquam assumenda neque quis dolore laborum. Nisi.",
    image:
      "https://images.unsplash.com/photo-1598981457915-aea220950616?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1193&q=80",
    image2:
      "https://images.unsplash.com/photo-1577897113292-3b95936e5206?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1090&q=80",
    tags: "announcement",
    featured: true,
  },
  {
    id: 3,
    date: "June 14, 2022",
    title: "adipisiasdgcing elit. Magnam",
    subText:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam suscipit aperiam porro eum enim officiis hic? Sunt ullam officia, totam explicabo, libero molestiae numquam assumenda neque quis dolore laborum. Nisi.",
    image:
      "https://images.unsplash.com/photo-1577897113292-3b95936e5206?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1090&q=80",
    image2:
      "https://images.unsplash.com/photo-1598981457915-aea220950616?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1193&q=80",
    tags: "announcement",
    featured: true,
  },
  {
    id: 4,
    date: "June 14, 2022",
    title: "adipisicingswe elit. Magnam",
    subText:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam suscipit aperiam porro eum enim officiis hic? Sunt ullam officia, totam explicabo, libero molestiae numquam assumenda neque quis dolore laborum. Nisi.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    image2:
      "https://images.unsplash.com/photo-1577897113292-3b95936e5206?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1090&q=80",
    tags: "announcement",
    featured: true,
  },
  {
    id: 5,
    date: "June 14, 2022",
    title: "adipisicing elit. fffMagnam",
    subText:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam suscipit aperiam porro eum enim officiis hic? Sunt ullam officia, totam explicabo, libero molestiae numquam assumenda neque quis dolore laborum. Nisi.",
    image:
      "https://images.unsplash.com/photo-1549383028-df014fa3a325?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
    image2:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    tags: "announcement",
    featured: true,
  },
  {
    id: 6,
    date: "June 14, 2022",
    title: "adipisicing elit. Magnamaaa",
    subText:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam suscipit aperiam porro eum enim officiis hic? Sunt ullam officia, totam explicabo, libero molestiae numquam assumenda neque quis dolore laborum. Nisi.",
    image: "/images/announcements/sample.png",
    tags: "announcement",
    featured: false,
  },
  {
    id: 7,
    date: "June 14, 2022",
    title: "adipisicing elit. Magnamsss",
    subText:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam suscipit aperiam porro eum enim officiis hic? Sunt ullam officia, totam explicabo, libero molestiae numquam assumenda neque quis dolore laborum. Nisi.",
    image: "/images/announcements/sample.png",
    tags: "announcement",
    featured: false,
  },
];
export function getAnnouncementById(id) {
  return ANNOUNCEMENT_DATA.find(
    (announcement) => convertToLink(announcement.title) === id
  );
}
export function getAnnouncementHomepage() {
  let featuredAnnouncements = ANNOUNCEMENT_DATA.filter(
    (announcement) => announcement.featured === true
  );
  return featuredAnnouncements;
}

export function getOtheAnnouncement(id) {
  let filteredAnnouncements = ANNOUNCEMENT_DATA.filter(
    (item) => convertToLink(item.title) !== id
  );
  return filteredAnnouncements;
}
