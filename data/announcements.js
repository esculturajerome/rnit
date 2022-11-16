import { convertToLink } from "../components/Functions";

export const ANNOUNCEMENT_DATA = [
  {
    id: 1,
    date: "November 14, 2022",
    title: "Diving to the deep",
    subText:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam suscipit aperiam porro eum enim officiis hic? Sunt ullam officia, totam explicabo, libero molestiae numquam assumenda neque quis dolore laborum. Nisi.",
    image: "/images/announcements/sample.png",
    tags: "announcement",
    featured: false,
  },
  {
    id: 2,
    date: "July 14, 2022",
    title: "explicabo, libero molestiae numquam",
    subText:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam suscipit aperiam porro eum enim officiis hic? Sunt ullam officia, totam explicabo, libero molestiae numquam assumenda neque quis dolore laborum. Nisi.",
    image: "/images/announcements/sample.png",
    tags: "announcement",
    featured: true,
  },
  {
    id: 3,
    date: "June 14, 2022",
    title: "adipisicing elit. Magnam",
    subText:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam suscipit aperiam porro eum enim officiis hic? Sunt ullam officia, totam explicabo, libero molestiae numquam assumenda neque quis dolore laborum. Nisi.",
    image: "/images/announcements/sample.png",
    tags: "announcement",
    featured: true,
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
