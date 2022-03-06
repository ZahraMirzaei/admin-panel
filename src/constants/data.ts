import images from "./images";

const data = {
  user: {
    name: "Zahra Mirzaei",
    img: images.avt,
  },
  summary: [
    {
      title: "Sales",
      value: "$5.340",
      icon: "akar-icons:shopping-bag",
    },
    {
      title: "Orders",
      value: "1760",
      icon: "icon-park-outline:transaction-order", //width:48px;
    },
    {
      title: "Revenue",
      value: "$2.530",
      icon: "bi:coin",
    },
  ],
  revenueByMonths: {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "July",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    data: [250, 200, 300, 280, 100, 220, 310, 190, 200, 120, 250, 350],
  },
};

export default data;
