const fakeEmails = [
  {
    Name: "Dalila Ouldcott",
    Email: "douldcottj@yellowpages.com",
    "date-and-time": "Tue Jul 25 2023 06:02 AM",
    massage: `Hey John,

What did you think of your recent purchase?

We'd love to hear your feedback on your recent order. Please share your experience in a review to help other pet parents just like you.

Regards,

Dalila Ouldcott`,
    Attachments: "example.doc",
    type: "Personal",
    status: "Sent",
  },
  {
    Name: "John Smith",
    Email: "john.smith@example.com",
    "date-and-time": "Wed Jul 26 2023 09:15 AM",
    massage: `Hello,

Attached is the report you requested. Please review it at your convenience.

Thank you.

Best regards,

John Smith`,
    Attachments: "report.pdf",
    type: "Important",
    status: "Draft",
  },
  {
    Name: "Jane Doe",
    Email: "jane.doe@example.com",
    "date-and-time": "Thu Jul 27 2023 03:30 PM",
    massage: `Hi Jane,

I hope this email finds you well. I wanted to share some exciting news with you.

We have selected you for our exclusive loyalty program. As a valued customer, you'll enjoy many benefits, including early access to new products and special discounts.

Regards,

Jane Doe`,
    Attachments: "",
    type: "Company",
    status: "Starred",
  },
  {
    Name: "Michael Johnson",
    Email: "michael.johnson@example.com",
    "date-and-time": "Fri Jul 28 2023 11:45 AM",
    massage: `Dear Michael,

We're pleased to inform you that your recent job application has been received successfully. Our hiring team is reviewing your application, and you will be notified of the next steps soon.

Best regards,

HR Department`,
    Attachments: "",
    type: "Private",
    status: "Spam",
  },
  {
    Name: "Emily Parker",
    Email: "emily.parker@example.com",
    "date-and-time": "Sat Jul 29 2023 02:20 PM",
    massage: `Hi Emily,

Congratulations on your promotion! We are delighted to announce that you have been promoted to the position of Senior Software Engineer. Your hard work and dedication have truly paid off.

Warm regards,

Management Team`,
    Attachments: "",
    type: "Personal",
    status: "Trash",
  },
  {
    Name: "Robert Brown",
    Email: "robert.brown@example.com",
    "date-and-time": "Sun Jul 30 2023 04:50 AM",
    massage: `Dear Robert,

Thank you for your recent purchase. Your order has been successfully shipped and will arrive at your address within 2-3 business days.

Regards,

Customer Support`,
    Attachments: "",
    type: "Important",
    status: "Sent",
  },
  {
    Name: "Sophia Lee",
    Email: "sophia.lee@example.com",
    "date-and-time": "Mon Jul 31 2023 08:30 AM",
    massage: `Hello Sophia,

Your monthly subscription has been renewed successfully. You now have access to all premium features. Enjoy!

Best regards,

The Subscription Team`,
    Attachments: "",
    type: "Company",
    status: "Draft",
  },
  {
    Name: "David Wilson",
    Email: "david.wilson@example.com",
    "date-and-time": "Tue Aug 01 2023 10:10 AM",
    massage: `Hi David,

We've noticed that you haven't completed your order. Don't miss out on the products you've added to your cart!

Complete your purchase now.

Regards,

The Sales Team`,
    Attachments: "",
    type: "Private",
    status: "Starred",
  },
  {
    Name: "Olivia Turner",
    Email: "olivia.turner@example.com",
    "date-and-time": "Wed Aug 02 2023 12:45 PM",
    massage: `Dear Olivia,

As part of our loyalty program, we are offering you an exclusive discount of 20% on your next purchase. Don't miss this opportunity!

Best regards,

The Marketing Team`,
    Attachments: "",
    type: "Personal",
    status: "Spam",
  },
  {
    Name: "William Martinez",
    Email: "william.martinez@example.com",
    "date-and-time": "Thu Aug 03 2023 03:20 PM",
    massage: `Hey William,

We've noticed that you haven't used your account in a while. Log in now to check out the latest features.

Regards,

The Account Team`,
    Attachments: "",
    type: "Important",
    status: "Draft",
  },
  {
    Name: "Ella Davis",
    Email: "ella.davis@example.com",
    "date-and-time": "Fri Aug 04 2023 06:00 AM",
    massage: `Hi Ella,

Thank you for signing up for our newsletter. Stay tuned for the latest updates, special offers, and more!

Best regards,

The Newsletter Team`,
    Attachments: "",
    type: "Company",
    status: "Starred",
  },
  {
    Name: "James Rodriguez",
    Email: "james.rodriguez@example.com",
    "date-and-time": "Sat Aug 05 2023 09:30 AM",
    massage: `Hello James,

We hope you're enjoying our service. We'd love to hear your feedback. Please take a moment to rate your experience.

Regards,

The Support Team`,
    Attachments: "",
    type: "Private",
    status: "Trash",
  },
  {
    Name: "Ava Green",
    Email: "ava.green@example.com",
    "date-and-time": "Sun Aug 06 2023 01:15 PM",
    massage: `Dear Ava,

Your account password has been successfully reset. If you didn't initiate this change, please contact us immediately.

Best regards,

The Security Team`,
    Attachments: "",
    type: "Personal",
    status: "Sent",
  },
  {
    Name: "Alexander White",
    Email: "alexander.white@example.com",
    "date-and-time": "Mon Aug 07 2023 04:40 PM",
    massage: `Hey Alexander,

We have a special surprise waiting for you! Log in to your account to discover it.

Regards,

The Surprise Team`,
    Attachments: "",
    type: "Important",
    status: "Draft",
  },
  {
    Name: "Isabella Hill",
    Email: "isabella.hill@example.com",
    "date-and-time": "Tue Aug 08 2023 07:00 AM",
    massage: `Hello Isabella,

Your subscription is about to expire. Renew now to continue enjoying our premium services.

Best regards,

The Subscription Team`,
    Attachments: "",
    type: "Company",
    status: "Starred",
  },
  {
    Name: "Daniel Scott",
    Email: "daniel.scott@example.com",
    "date-and-time": "Wed Aug 09 2023 10:20 AM",
    massage: `Dear Daniel,

Thank you for your inquiry. Our team is working diligently to address your questions. We'll get back to you with detailed information shortly.

Best regards,

The Support Team`,
    Attachments: "",
    type: "Private",
    status: "Spam",
  },
  {
    Name: "Mia Baker",
    Email: "mia.baker@example.com",
    "date-and-time": "Thu Aug 10 2023 02:05 PM",
    massage: `Hi Mia,

We're excited to inform you that you've won a free membership for one year! Claim your prize now.

Warm regards,

The Membership Team`,
    Attachments: "",
    type: "Personal",
    status: "Trash",
  },
  {
    Name: "Logan Ward",
    Email: "logan.ward@example.com",
    "date-and-time": "Fri Aug 11 2023 05:50 AM",
    massage: `Hey Logan,

We hope you're having a great day. If you need any assistance, feel free to reach out to us.

Regards,

The Support Team`,
    Attachments: "",
    type: "Important",
    status: "Sent",
  },
  {
    Name: "Aria Murphy",
    Email: "aria.murphy@example.com",
    "date-and-time": "Sat Aug 12 2023 09:40 AM",
    massage: `Hello Aria,

Thank you for your recent purchase. We hope you're enjoying your new items!

Best regards,

The Customer Support Team`,
    Attachments: "",
    type: "Company",
    status: "Draft",
  },
  {
    Name: "Jackson Turner",
    Email: "jackson.turner@example.com",
    "date-and-time": "Sun Aug 13 2023 01:30 PM",
    massage: `Hi Jackson,

We'd like to invite you to our exclusive event. Check your inbox for more details.

Regards,

The Event Team`,
    Attachments: "",
    type: "Private",
    status: "Starred",
  },
  {
    Name: "Scarlett Morris",
    Email: "scarlett.morris@example.com",
    "date-and-time": "Mon Aug 14 2023 04:55 PM",
    massage: `Dear Scarlett,

Thank you for your patience. Your order has been processed and will be shipped soon.

Best regards,

The Sales Team`,
    Attachments: "",
    type: "Personal",
    status: "Spam",
  },
  {
    Name: "Logan Ward",
    Email: "logan.ward@example.com",
    "date-and-time": "Fri Aug 11 2023 05:50 AM",
    massage: `Hey Logan,

We hope you're having a great day. If you need any assistance, feel free to reach out to us.

Regards,

The Support Team`,
    Attachments: "",
    type: "Important",
    status: "Sent",
  },
  {
    Name: "Aria Murphy",
    Email: "aria.murphy@example.com",
    "date-and-time": "Sat Aug 12 2023 09:40 AM",
    massage: `Hello Aria,

Thank you for your recent purchase. We hope you're enjoying your new items!

Best regards,

The Customer Support Team`,
    Attachments: "",
    type: "Company",
    status: "Draft",
  },
  {
    Name: "Jackson Turner",
    Email: "jackson.turner@example.com",
    "date-and-time": "Sun Aug 13 2023 01:30 PM",
    massage: `Hi Jackson,

We'd like to invite you to our exclusive event. Check your inbox for more details.

Regards,

The Event Team`,
    Attachments: "",
    type: "Private",
    status: "Starred",
  },
  {
    Name: "Scarlett Morris",
    Email: "scarlett.morris@example.com",
    "date-and-time": "Mon Aug 14 2023 04:55 PM",
    massage: `Dear Scarlett,

Thank you for your patience. Your order has been processed and will be shipped soon.

Best regards,

The Sales Team`,
    Attachments: "",
    type: "Personal",
    status: "Spam",
  },
  {
    Name: "Logan Ward",
    Email: "logan.ward@example.com",
    "date-and-time": "Fri Aug 11 2023 05:50 AM",
    massage: `Hey Logan,

We hope you're having a great day. If you need any assistance, feel free to reach out to us.

Regards,

The Support Team`,
    Attachments: "",
    type: "Important",
    status: "Sent",
  },
  {
    Name: "Aria Murphy",
    Email: "aria.murphy@example.com",
    "date-and-time": "Sat Aug 12 2023 09:40 AM",
    massage: `Hello Aria,

Thank you for your recent purchase. We hope you're enjoying your new items!

Best regards,

The Customer Support Team`,
    Attachments: "",
    type: "Company",
    status: "Draft",
  },
  {
    Name: "Jackson Turner",
    Email: "jackson.turner@example.com",
    "date-and-time": "Sun Aug 13 2023 01:30 PM",
    massage: `Hi Jackson,

We'd like to invite you to our exclusive event. Check your inbox for more details.

Regards,

The Event Team`,
    Attachments: "",
    type: "Private",
    status: "Starred",
  },
  {
    Name: "Scarlett Morris",
    Email: "scarlett.morris@example.com",
    "date-and-time": "Mon Aug 14 2023 04:55 PM",
    massage: `Dear Scarlett,

Thank you for your patience. Your order has been processed and will be shipped soon.

Best regards,

The Sales Team`,
    Attachments: "",
    type: "Personal",
    status: "Spam",
  },
  {
    Name: "Logan Ward",
    Email: "logan.ward@example.com",
    "date-and-time": "Fri Aug 11 2023 05:50 AM",
    massage: `Hey Logan,

We hope you're having a great day. If you need any assistance, feel free to reach out to us.

Regards,

The Support Team`,
    Attachments: "",
    type: "Important",
    status: "Sent",
  },
  {
    Name: "Aria Murphy",
    Email: "aria.murphy@example.com",
    "date-and-time": "Sat Aug 12 2023 09:40 AM",
    massage: `Hello Aria,

Thank you for your recent purchase. We hope you're enjoying your new items!

Best regards,

The Customer Support Team`,
    Attachments: "",
    type: "Company",
    status: "Draft",
  },
  {
    Name: "Jackson Turner",
    Email: "jackson.turner@example.com",
    "date-and-time": "Sun Aug 13 2023 01:30 PM",
    massage: `Hi Jackson,

We'd like to invite you to our exclusive event. Check your inbox for more details.

Regards,

The Event Team`,
    Attachments: "",
    type: "Private",
    status: "Starred",
  },
  {
    Name: "Scarlett Morris",
    Email: "scarlett.morris@example.com",
    "date-and-time": "Mon Aug 14 2023 04:55 PM",
    massage: `Dear Scarlett,

Thank you for your patience. Your order has been processed and will be shipped soon.

Best regards,

The Sales Team`,
    Attachments: "",
    type: "Personal",
    status: "Spam",
  },
];

export default fakeEmails;
