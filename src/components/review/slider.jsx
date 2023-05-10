import Review from "./review";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const review = [
  {
    name: "Khush Bakht",
    text: "A couple of weeks before the exam, in a completely different country and I find out, I chose the wrong academy?! Medastra came my way when I had pretty much thought, giving plab 2 might just be impossible. Dr Sara changed not just my approach but the whole ideology I had towards this exam. Suddenly it all started to make more sense. She emphasises on her candidates to learn how to ‘embrace’ the unknown, she brings life to ‘ scripts’ and gives you that one push to do better. Dr Awan prompts you to understand the metiman and approach it with all the expertise. Not even once, do they make you feel low about yourself. Absolutely loved the crash course. Wish I had more time for the full course. It’s worth every penny and every second of your time.",
    rating: [5],
    date: "15-04-2023",
  },
  {
    name: "Muhammad Sabir",
    text: "Hello everyone. I wanted to share my experience of PLAB 2 crash course from Medastra. It is very overwhelming at times because sometimes you’ve signed up for another academy and then later on you get to know about the reality of the other academies and then you find medastra (just like I did). I decided to go with the crash course and spend that money rather than going through the mental stress of not passing the exam and then spending all the money, all over again. So the course just comprises of all the approaches that one need in the exam which is really helpful. The best part is that they give one on one teaching experience and you dont feel left out. And you get to learn to approach the most challenging tasks i.e LGBTQ scenarios and angry patient scenarios etc. Dr Sara has put alot of effort and explains everything in such detail like no one else. And the thing that actually sets them apart is the experience that they both work in the NHS and that too as GPs which is why they’re aware of all the real life scenarios as plab 2 is based on almost all the scenarios that one would expect in a gp setting. This is the biggest relief that you get all your confusions cleared from someone actually working in the NHS and not just telling you supposed stuff. They’ve the real high field mannikin *THE METI MAN* Which actually comes in the gmc exam. The simulations on it reduce the anxiety as you already go through all that setting and you get to practice at the real meti man instead of the basic models. I would highly recommend them as both Dr Sara and Dr Awan are really hard working teachers and they’ve really put all their efforts in the course which is really helpful for someone who has no exposure to the actual NHS experience and that makes them a good trainer and sets them a class apart!",
    rating: [5],
    date: "15-04-2023",
  },
  {
    name: "Jennifer M",
    text: "I did the PLAB 2 Crash Course & it was incredible. First of all, Dr. Sara is truly amazing not just as a teacher but as a person. She’s so kind and attentive to everyone’s individual needs and made us feel so welcome and cared for. The teaching itself was excellent and thorough. The style and quality are very different from typical academies. Instead of teaching scripts she teaches you how to approach & deal with any type of case you’ll encounter in the exam. Because of the small group sizes she gets to know you well enough to give very personalized & specific feedback. And you won’t be competing with anyone for mannequins, equipment and space in the academy. The instructors at MEDASTRA are registered and practicing in the NHS & have been for many years so it really shows through their teaching. The academy has nice accommodation nearby which is super convenient because it’s close enough to walk & it’s surrounded by shops & restaurants. It’s also close to the GMC, the airport & the city center. If you can’t attend a course I’d still strongly recommend organizing a feedback session with them because the feedback you’ll get is invaluable.",
    rating: [5],
    date: "14-04-2023",
  },
  {
    name: "Fraz Butt",
    text: "A very detailed and tailor made mock session in a very professional way, with special emphasis on whatever you are lacking or not doing up to the mark. I passed with flying colors and she played a handsome role in that. Highly Recommend.",
    rating: [5],
    date: "13-04-2023",
  },
  {
    name: "Bilal Ranjha",
    text: "Well experienced faculty. Working in NHS examiners and seniors doctors. The location is very accessible for all the students and easy to fin accommodation near by. The sessions are supervised by highly experienced faculty who knows exactly how the NHS works and what's expected in exam. definitive mocks and constructive feedback provided which prepares you for exam and makes you a safe doctor!",
    rating: [5],
    date: "28-03-2023",
  },
  {
    name: "Naila Sarfraz",
    text: "I recently passed Plab2 and I'm so so grateful for Medastra team especially Dr Sara & Dr Abbas. I was taking a very popular Plab2 academy and I failed all my 3 mocks. I was so stressed out because they didn't tell me where I was lacking. To my fortune , one of my friend recommended me their personalized feedback mock. I did that mock 3 days before the exam and I got to know where my mistakes are. It was a game changer for me.I got a chance to see real mannequin that were replica to GMC mannequin and simman and it boosted my confidence. These sessions are highly recommendable and if I can pass it you can pass it as well.",
    rating: [5],
    date: "28-03-2023",
  },
  {
    name: "Hafsa Fayyaz",
    text: "Hi everyone! So I just got back my result and By the grace of God and After that I’ll say Dr Sara I passed my exam. I had joined a pretty well-known academy and after appearing in their First Mock I had lost all my confidence and wanted to Cancel my exam which was in the upcoming week, but I was fortunate enough to Find Dr Sara right after my Mock and despite having a very short notice she very kindly arranged a one-to-one feedback Mock for me and If I could keep my entire preparation on one hand and Dr Sara’s one Mock on the other I believe the latter would weigh heavier as she personally looked after every point of me and gave me the detailed feedback that I needed and gave me the confidence to Appear in the exam itself. I couldn’t find her earlier and had a pretty tough time navigating through the preparation process, but all my fellow candidates who have time, I will Highly recommend her course.",
    rating: [5],
    date: "28-03-2023",
  },
  {
    name: "Sarmad Hassan",
    text: "I dedicate my success in PLAB2 exam to the extensive review that I got from Dr. Sara Awan and Dr. Tauqeer Abbas in 2 face to face mock sessions that I had with them before my 2nd attempt. They are genuinely dedicating their time and effort to see the students succeed. I can compare their way of teaching with other academies because I joined another academy in my first attempt and there are a lot of things why Medastra academy is the best in business. 1) Medastra academy prepares you for all the possible situations that you may come across in PLAB exam, other academies prepare you for 500-600 typical scenarios that were in GMC bank, but these days GMC is changing the scenarios and other academies are not ready to teach those new scenarios. Medastra academy focuses on your consultation skills by various techniques they try to inculcate in all their students that may help the candidates way beyond the PLAB2 exam. 2) Dr. Sara is the best teacher you may come across during your PLAB2 preparation. In just 2 face to face mock sessions she gave me such an extensive and critical analysis that helped me pass 13 stations in my exam. Her review focused on the basics that I could improve and that's why I dedicated my success to those 2 sessions. 3) Medastra has state of the art and new equipment which is of the same quality as in GMC. You can do hands on practice on the equipment anytime you want. 4) Both Dr. Tauqeer Abbas and Dr. Sara were GMC examiners once, so they know exactly what the examiners are expecting out of the candidates in a given situation. 5) Dr. Tauqeer and Dr. Sara are very sincere and dedicated towards the success of their students, even after the exam they stay in touch with you for any possible difficulty you might face towards your journey to UK. I was very lucky to have met these 2 great human beings and amazing teachers. I am sure you will feel the same way if you chose Medastra academy for your Plab 2 preparation.",
    rating: [5],
    date: "25-03-2023",
  },
  {
    name: "Mubashir Rafique",
    text: "I found out about Dr Abbas and Dr Sara at MEDASTRA PLAB2 courses after failing my first attempt. I'm really thankful that I met them! Dr Sara really helped me with my communication skills and her open, non-scripted and flexible approach really helped me understand how to approach this exam. She would always respond whenever I had any queries and she guided me rigorously throughout my preparation for my PLAB-2 second attempt. Dr Tauqeer Abbas gave me insight into what GMC examiners are really looking for, which is something other academies are really misguiding us about. He polished my confidence by teaching me techniques like NLP. The mocks I gave to them with personalized & detailed feedback close to my exam were actual game-changers for me and I was able to pass 14 stations with a score of 127 on my second PLAB2 attempt ! I would strongly advise anyone to attend their course, sessions and mocks, especially if you are struggling to identify your weaknesses and want to improve. You would be very lucky if you get the chance to have a practice session or mock with them as they have vast experience of working over 15 years in the NHS, of teaching and training junior doctors, and of knowing the PLAB2 exam really well. They are doing a great job helping many candidates pass this exam successfully like I did, and I would recommend any PLAB 2 candidates who are struggling to get their guidance as well.",
    rating: [5],
    date: "28-03-2023",
  },
  {
    name: "Arsalan Naqvi",
    text: "I am really thankful to Dr Sara Awan and Dr Tauqeer Abbas. Both are extremely professional in teaching and guiding one towards right direction. They made me understand the ways to get through different challenging questions. Dr Abbas has great experience as being former Plab2 examiner and gave me great tips regarding history taking and efficient time management. And also advised not to use certain common mistakes that a candidate repeatedly does. Dr Sara possess excellent communication skills and also taught me use holistic approach. Stay blessed both of you. Thanks for guiding me and helping me pass the exam in first attempt.",
    rating: [5],
    date: "28-02-2023",
  },
  {
    name: "Dr shoaib tarar",
    text: "Best ever combination of well versed and well experienced faculty including former PLAB examiners and practicing NHS senior doctors. They exactly know what is expected in exam and what is needed for a candidate to get through in first attempt. Teaching , Communication and hands on practice for skill station with excellent manikins available at best and most favourite location of Manchester with option of getting accommodation nearby. Highly recommended.",
    rating: [5],
    date: "28-03-2023",
  },
  {
    name: "Rafay ali",
    text: "Dr Sara Awan is the best teacher present in the business when it comes to PLAB 2. I'm glad I took their plab 2 sessions. The things they pointed out in our sessions really helped me to approach stations differently and more efficiently. Their non scripted approach and important tips on problem solving, ips, ice and many other things helped me alot during preparation. I'm glad that I took it and I'll suggest everyone to take their classes for personalized feedback and preparation.",
    rating: [5],
    date: "28-02-2023",
  },
  {
    name: "Arsalan Naqvi",
    text: "I'm grateful to Dr Sara for helping me with my PLAB 2 exam. No doubt she's the best teacher in Manchester. Dr Abbas also gave me great tips for example house keeping and NLP. Not only the PLAB 2 exam, Dr Abbas also helped me with clinical attachment. Thank you so much for all your help 😊😊😊.",
    rating: [5],
    date: "28-03-2023",
  },
];

export default () => {
  return (
    <>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        centeredSlides={true}
        grabCursor={true}
        slidesPerView={1}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
            loop: true,
          },

          1024: {
            slidesPerView: 3,
            spaceBetween: 35,
            loop: true,
          },
        }}
        pagination={{ clickable: true }}
      >
        {review.map((item) => (
          <SwiperSlide className="swiper-slide  bg-slate-100 dark:bg-gray-800  shadow-sm border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
            <Review
              name={item.name}
              text={item.text}
              rating={item.rating}
              date={item.date}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <hr className="h-px my-12 bg-gray-200 border-0 dark:bg-gray-700" />
    </>
  );
};
