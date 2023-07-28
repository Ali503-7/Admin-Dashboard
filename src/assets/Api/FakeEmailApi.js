import One from "../Imgs/avater/Avatar.png";
import Two from "../Imgs/avater/Three.png";
import Three from "../Imgs/avater/four.png";
import Four from "../Imgs/avater/five.png";
import Six from "../Imgs/avater/five.png";

const avatars = [One, Two, Three, Four, Six];

const fakeemails = [
  {
    id: "1",
    name: "Dalila Ouldcott",
    email: "douldcottj@yellowpages.com",
    date: "Tue Jul 25 2023",
    time: "06:02 AM",
    massage: `Hey John,

    What did you think of your recent purchase?

    We'd love to hear your feedback on your recent order. Please share your experience in a review to help other pet parents just like you.

    Regards,

    Dalila Ouldcott`,
    attachments: "example.doc",
    type: "Personal",
    status: "Sent",
    avatar: avatars[0],
    readState: false,
    jobTitle: "Pet Parent Review Specialist",
    starred: false,
  },
  {
    id: "2",
    name: "John Smith",
    email: "john.smith@example.com",
    date: "Wed Jul 26 2023",
    time: "09:15 AM",
    massage: `Hello,

Attached is the report you requested. Please review it at your convenience.

Thank you.

Best regards,

John Smith`,
    attachments: "report.pdf",
    type: "Important",
    status: "Draft",
    avatar: avatars[1],
    readState: false,
    jobTitle: "Senior Analyst",
    starred: false,
  },
  {
    id: "3",
    name: "Jane Doe",
    email: "jane.doe@example.com",
    date: "Thu Jul 27 2023",
    time: "03:30 PM",
    massage: `Hi Jane,

I hope this email finds you well. I wanted to share some exciting news with you.

We have selected you for our exclusive loyalty program. As a valued customer, you'll enjoy many benefits, including early access to new products and special discounts.

Regards,

Jane Doe`,
    attachments: "",
    type: "Company",
    status: "Starred",
    avatar: avatars[2],
    readState: false,
    jobTitle: "Customer Loyalty Manager",
    starred: true,
  },
  {
    id: "4",
    name: "Michael Johnson",
    email: "michael.johnson@example.com",
    date: "Fri Jul 28 2023",
    time: "11:45 AM",
    massage: `Dear Michael,

We're pleased to inform you that your recent job application has been received successfully. Our hiring team is reviewing your application, and you will be notified of the next steps soon.

Best regards,

HR Department`,
    attachments: "",
    type: "Private",
    status: "Spam",
    avatar: avatars[3],
    readState: true,
    jobTitle: "Recruitment Specialist",
    starred: false,
  },
  {
    id: "5",
    name: "Emily Parker",
    email: "emily.parker@example.com",
    date: "Sat Jul 29 2023",
    time: "02:20 PM",
    massage: `Hi Emily,

Congratulations on your promotion! We are delighted to announce that you have been promoted to the position of Senior Software Engineer. Your hard work and dedication have truly paid off.

Warm regards,

Management Team`,
    attachments: "",
    type: "Personal",
    status: "Trash",
    avatar: avatars[4],
    readState: false,
    jobTitle: "HR Manager",
    starred: false,
  },
  {
    id: "6",
    name: "Robert Brown",
    email: "robert.brown@example.com",
    date: "Sun Jul 30 2023",
    time: "04:50 AM",
    massage: `Dear Robert,

Thank you for your recent purchase. Your order has been successfully shipped and will arrive at your address within 2-3 business days.

Regards,

Customer Support`,
    attachments: "",
    type: "Important",
    status: "Sent",
    avatar: avatars[3],
    readState: true,
    jobTitle: "Shipping Coordinator",
    starred: false,
  },
  {
    id: "7",
    name: "Sophia Lee",
    email: "sophia.lee@example.com",
    date: "Mon Jul 31 2023",
    time: "08:30 AM",
    massage: `Hello Sophia,

Your monthly subscription has been renewed successfully. You now have access to all premium features. Enjoy!

Best regards,

The Subscription Team`,
    attachments: "",
    type: "Company",
    status: "Draft",
    avatar: avatars[2],
    readState: true,
    jobTitle: "Subscription Manager",
    starred: false,
  },
  {
    id: "8",
    name: "David Wilson",
    email: "david.wilson@example.com",
    date: "Tue Aug 01 2023",
    time: "10:10 AM",
    massage: `Hi David,

We've noticed that you haven't completed your order. Don't miss out on the products you've added to your cart!

Complete your purchase now.

Regards,

The Sales Team`,
    attachments: "",
    type: "Private",
    status: "Starred",
    avatar: avatars[1],
    readState: false,
    jobTitle: "Sales Associate",
    starred: true,
  },
  {
    id: "9",
    name: "Olivia Turner",
    email: "olivia.turner@example.com",
    date: "Wed Aug 02 2023",
    time: "12:45 PM",
    massage: `Dear Olivia,

As part of our loyalty program, we are offering you an exclusive discount of 20% on your next purchase. Don't miss this opportunity!

Best regards,

The Marketing Team`,
    attachments: "",
    type: "Personal",
    status: "Spam",
    avatar: avatars[0],
    readState: false,
    jobTitle: "Marketing Specialist",
    starred: false,
  },
  {
    id: "10",
    name: "William Martinez",
    email: "william.martinez@example.com",
    date: "Thu Aug 03 2023",
    time: "03:20 PM",
    massage: `Hey William,

We've noticed that you haven't used your account in a while. Log in now to check out the latest features.

Regards,

The Account Team`,
    attachments: "",
    type: "Important",
    status: "Draft",
    avatar: avatars[1],
    readState: true,
    jobTitle: "Account Manager",
    starred: false,
  },
  {
    id: "11",
    name: "Ella Davis",
    email: "ella.davis@example.com",
    date: "Fri Aug 04 2023",
    time: "06:00 AM",
    massage: `Hi Ella,

Thank you for signing up for our newsletter. Stay tuned for the latest updates, special offers, and more!

Best regards,

The Newsletter Team`,
    attachments: "",
    type: "Company",
    status: "Starred",
    avatar: avatars[2],
    readState: false,
    jobTitle: "Newsletter Coordinator",
    starred: true,
  },
  {
    id: "12",
    name: "James Rodriguez",
    email: "james.rodriguez@example.com",
    date: "Sat Aug 05 2023",
    time: "09:30 AM",
    massage: `Hello James,

We hope you're enjoying our service. We'd love to hear your feedback. Please take a moment to rate your experience.

Regards,

The Support Team`,
    attachments: "",
    type: "Private",
    status: "Trash",
    avatar: avatars[3],
    readState: true,
    jobTitle: "Customer Support Representative",
    starred: false,
  },
  {
    id: "13",
    name: "Ava Green",
    email: "ava.green@example.com",
    date: "Sun Aug 06 2023",
    time: "01:15 PM",
    massage: `Dear Ava,

Your account password has been successfully reset. If you didn't initiate this change, please contact us immediately.

Best regards,

The Security Team`,
    attachments: "",
    type: "Personal",
    status: "Sent",
    avatar: avatars[4],
    readState: false,
    jobTitle: "Security Analyst",
    starred: false,
  },
  {
    id: "14",
    name: "Alexander White",
    email: "alexander.white@example.com",
    date: "Mon Aug 07 2023",
    time: "04:40 PM",
    massage: `Hey Alexander,

We have a special surprise waiting for you! Log in to your account to discover it.

Regards,

The Surprise Team`,
    attachments: "",
    type: "Important",
    status: "Draft",
    avatar: avatars[0],
    readState: true,
    jobTitle: "Customer Happiness Specialist",
    starred: false,
  },
  {
    id: "15",
    name: "Isabella Hill",
    email: "isabella.hill@example.com",
    date: "Tue Aug 08 2023",
    time: "07:00 AM",
    massage: `Hello Isabella,

Your subscription is about to expire. Renew now to continue enjoying our premium services.

Best regards,

The Subscription Team`,
    attachments: "",
    type: "Company",
    status: "Starred",
    avatar: avatars[3],
    readState: false,
    jobTitle: "Subscription Renewal Specialist",
    starred: true,
  },
  {
    id: "16",
    name: "Daniel Scott",
    email: "daniel.scott@example.com",
    date: "Wed Aug 09 2023",
    time: "10:20 AM",
    massage: `Dear Daniel,

Thank you for your inquiry. Our team is working diligently to address your questions. We'll get back to you with detailed information shortly.

Best regards,

The Support Team`,
    attachments: "",
    type: "Private",
    status: "Spam",
    avatar: avatars[2],
    readState: true,
    jobTitle: "Support Representative",
    starred: false,
  },
  {
    id: "17",
    name: "Mia Baker",
    email: "mia.baker@example.com",
    date: "Thu Aug 10 2023",
    time: "02:05 PM",
    massage: `Hi Mia,

We're excited to inform you that you've won a free membership for one year! Claim your prize now.

Warm regards,

The Membership Team`,
    attachments: "",
    type: "Personal",
    status: "Trash",
    avatar: avatars[4],
    readState: false,
    jobTitle: "Membership Coordinator",
    starred: false,
  },
  {
    id: "18",
    name: "Logan Ward",
    email: "logan.ward@example.com",
    date: "Fri Aug 11 2023",
    time: "05:50 AM",
    massage: `Hey Logan,

We hope you're having a great day. If you need any assistance, feel free to reach out to us.

Regards,

The Support Team`,
    attachments: "",
    type: "Important",
    status: "Sent",
    avatar: avatars[0],
    readState: false,
    jobTitle: "Support Specialist",
    starred: false,
  },
  {
    id: "19",
    name: "Aria Murphy",
    email: "aria.murphy@example.com",
    date: "Sat Aug 12 2023",
    time: "09:40 AM",
    massage: `Hello Aria,

Thank you for your recent purchase. We hope you're enjoying your new items!

Best regards,

The Customer Support Team`,
    attachments: "",
    type: "Company",
    status: "Draft",
    avatar: avatars[1],
    readState: false,
    jobTitle: "Customer Support Agent",
    starred: false,
  },
  {
    id: "20",
    name: "Jackson Turner",
    email: "jackson.turner@example.com",
    date: "Sun Aug 13 2023",
    time: "01:30 PM",
    massage: `Hi Jackson,

We'd like to invite you to our exclusive event. Check your inbox for more details.

Regards,

The Event Team`,
    attachments: "",
    type: "Private",
    status: "Starred",
    avatar: avatars[4],
    readState: false,
    jobTitle: "Event Coordinator",
    starred: true,
  },
  {
    id: "21",
    name: "Scarlett Morris",
    email: "scarlett.morris@example.com",
    date: "Mon Aug 14 2023",
    time: "04:55 PM",
    massage: `Dear Scarlett,

Thank you for your patience. Your order has been processed and will be shipped soon.

Best regards,

The Sales Team`,
    attachments: "",
    type: "Personal",
    status: "Spam",
    avatar: avatars[2],
    readState: false,
    jobTitle: "Order Processing Specialist",
    starred: false,
  },
];

export default fakeemails;
