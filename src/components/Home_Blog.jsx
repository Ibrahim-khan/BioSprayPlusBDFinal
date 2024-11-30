import Image from "next/image";

const Home_Blog = () => {
  return (
    <div className="bg-gray-100 p-4 ">
      <div className="container mx-auto space-y-10">
        {/* First Article */}
        <div className="bg-white rounded-lg shadow-md space-y-8 mt-20">
          <div className="w-full flex flex-col md:flex-row">
            {/* Top-Left Image */}
            <div className="flex-shrink-0 p-4">
              <Image
                src="/images/bio-spray-plus.png"
                alt="Bio Spray Plus"
                width={250}
                height={250}
                className="object-contain mx-auto md:mx-0 md:mt-0"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-center">
                Bio Spray Plus কি?
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                বায়ো স্প্রে প্লাস আসলে একটা ডায়াটারী ফুড সাপ্লিমেন্ট। যা মানব
                দেহের কোষ বিভাজনে সহায়তা করে।
              </p>

              <ol className="list-decimal list-inside text-gray-700 space-y-2">
                <li>
                  <strong>বায়ো স্প্রে প্লাস এর প্রধান কাজ:</strong> এটি হিউম্যান
                  গ্রোথ হরমোন ডেভেলপ করতে সহায়তা করে।
                  <br />
                  বয়স ২৫ এর পর থেকে শরীরে হিউম্যান গ্রোথ হরমোন কমে যেতে থাকে।
                  বায়ো স্প্রে প্লাস এই প্রক্রিয়াকে দেরি করায়।
                </li>
                <li>
                  এতে রয়েছে ৪৮ প্রকার উপাদান এবং কোলস্ট্রাম লিকুইড। এর মধ্যে তিন
                  প্রকার এন্টিবডি (IgA, IgM, IgG) আছে, যা রোগ প্রতিরোধ ক্ষমতা
                  বৃদ্ধি করে।
                </li>
                <li>
                  এটি ৯টি গুরুত্বপূর্ণ হরমোন ইমব্যালেন্স সমাধানে সহায়তা করে:
                  <ul className="list-disc list-inside pl-4 mt-2">
                    <li>এইচ জি এইচ</li>
                    <li>মেলাটোনিন</li>
                    <li>থায়রয়েড</li>
                    <li>ইনসুলিন</li>
                    <li>ডি এইচ ই এ</li>
                    <li>এস্ট্রোজেন</li>
                    <li>প্রজেস্টোরন</li>
                    <li>টেস্টোস্ট্রেরন</li>
                    <li>নাইট্রিক অক্সাইড</li>
                  </ul>
                </li>
              </ol>
            </div>
          </div>
        </div>

        {/* Second Article */}
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-center">
              Bio Spray Plus কি কি কাজ করে?
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>রক্ত সঞ্চালন প্রক্রিয়া সঠিক রাখে।</li>
              <li>
                শরীরের কোষ উৎপাদন HGH (হিউম্যান গ্রোথ হরমোন) স্বাভাবিক রাখে।
              </li>
              <li>মাংসপেশী ও ত্বকের পুরুত্ব বাড়ায়।</li>
              <li>
                অগ্নাশয়ের (Pancreas) বিটাসেল কোষ সবসময় সক্রিয় রাখার মাধ্যমে
                শরীরে ইনসুলিন উৎপাদন স্বাভাবিক রাখে।
              </li>
              <li>
                নিয়মিত বায়ো স্প্রে প্লাস ব্যবহারের মাধ্যমে ডায়াবেটিকস প্রতিকার
                সহায়তা করে।
              </li>
              <li>
                ডায়াবেটিকস এর কারণে সৃষ্টি জটিল রোগ গ্যাংরিন (হাত, পা সহ শরীরের
                বিভিন্ন অংশের ক্ষত পচন) দ্রুত শুকায়। নিয়মিত ব্যবহারে গ্যাংরিন
                উপশম হয়।
              </li>
              <li>
                কিডনি ও লিভারের কার্যক্ষমতা বৃদ্বি করে ফলে কিডনি লিভার জনিত জটিল
                রোগ যেমনঃ লিভার সিরোসিস, লিভার ক্যান্সার, কিডনি ফেইলিওর, কিডনিতে
                পাথর, পাইলস, নিরাময়ে ভূমিকা রাখে।
              </li>
              <li>
                স্তন, জরায়ু, ব্রেস্ট, ফুসফুস কোলন ও প্রস্টেট ক্যান্সার প্রতিরোধ
                করে।
              </li>
              <li>
                হৃদযন্ত্রের ক্রিয়া সঠিক রেখে উচ্চ রক্তচাপ নিয়ন্ত্রনে ভূমিকা
                রাখে।
              </li>
              <li>
                হার্টের বিভিন্ন ধরনের রোগ যেমনঃ হৃদরোগ, হার্টএ্যাটাকের ঝুঁকি
                কমায়।
              </li>
              <li>
                বায়ো স্প্রে প্লাস নিয়মিত ব্যবহারের মাধ্যমে হার্টব্লক দূর হয়।
              </li>
              <li>যৌন হরমোন উৎপাদন করার মাধ্যমে যৌনশক্তি বৃদ্বি করে।</li>
              <li>
                বায়ো স্প্রে প্লাস নিয়মিত ব্যবহারে হাঁপানি বা এ্যাজমা রোগ
                প্রতিকার হয়।
              </li>
              <li>
                রক্তে কোলেস্ট্রোরল এর মাত্রা সঠিক রাখে, যার ফলে শরীরের অতিরিক্ত
                কোলেস্ট্রোরল দূরীভূত হয়।
              </li>
              <li>শরীরের অতিরিক্ত ওজন কমায়, যার ফলে বাড়তি মেদ কমে যায়।</li>
              <li>হাঁড় ও দাঁতের ক্ষয় রোগ ও গঠন প্রক্রিয়া সঠিক রাখে।</li>
              <li>শরীরের অভ্যন্তরে তারল্যের ভারসাম্যতা ঠিক রাখে।</li>
              <li>
                বিভিন্ন ধরনের বাত যেমনঃ জোড়াসন্ধির ব্যাথা, মাংসপেশির ব্যাথা,
                হাঁড়ের ব্যাথা, গ্যাস্টিক ও আলসার নিরাময় করে।
              </li>
              <li>
                হরমোন ঘাটতি পূরণের মাধ্যমে পুরুষ/মহিলাদের হরমোন জনিত
                বন্ধ্যাত্বের সমস্যা দূর করে।
              </li>
              <li>অনিদ্রা রোগ দূর করে ও চোখের দৃষ্টি শক্তি বৃদ্বি করে।</li>
              <li>
                ব্রেইনের ক্ষয়রোধ করে, ব্রেইনের রক্ত সঞ্চালন স্বাভাবিক রাখে এবং
                নার্ভাস সিস্টেমের কাজকে গতিময় করে।
              </li>
              <li>
                হরমোন উৎপাদনের মাধ্যমে দীর্ঘদিন তারুণ্য বা চেহারার লাবণ্যতা ধরে
                রাখে।
              </li>
              <li>চুল কালো করে এবং নতুন চুল গজাতে সাহায্য করে।</li>
              <li>
                পাকস্থলীর কার্যক্ষমতা ঠিক রাখে, ফলে হজম শক্তি বৃদ্বি করে,
                গ্যাস্ট্রিক ও আলসার নিরাময় হয়।
              </li>
              <li>
                শরীরের বিভিন্ন ধরনের চর্মরোগ, এলার্জি ব্রণ, একজিমা দূর করে।
              </li>
              <li>পারকিনসন (হাত/পা কাঁপূনি) রোগ নিরাময়ে সহায়তা করে।</li>
            </ul>
          </div>
        </div>

        {/* Third Article */}
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-center">
              Bio Spray Plus ব্যবহারের নিয়ম?
            </h3>
            <p className="text-gray-700 leading-relaxed space-y-4">
              ১) দৈনিক ২ বার গ্রহণ করতে হবে। সকালে ঘুম থেকে প্রথম উঠার পর কোন
              প্রকার থুথু না ফেলে Bio Spray Plus গ্রহণ করতে হবে। পরবর্তীতে হালকা
              ব্যায়াম বা হাঁটাহাঁটি করা উত্তম এবং রাত্রে ঘুমানোর পূর্বে গ্রহণ
              করতে হবে।
              <br />
              ২) সর্বাধিক ফলাফলের জন্য শয়নের পূর্বে খালি পেটে অথবা ব্যায়ামের
              পূর্বে Bio Spray Plus গ্রহণ করা।
              <br />
              ৩) Bio Spray Plus উত্তমরূপে ঝাঁকিয়ে নিয়ে জিহ্বার নিচে গ্রহণের সাথে
              সাথে মুখ বন্ধ করতে হবে এবং ৩-৫ মিনিট পর মুখের মধ্যে টক টক মিষ্টি
              এক প্রকার জুসের মত অনুভূত হবে, তাহা গিলে ফেলতে হবে এবং আরও ৩-৫
              মিনিট মুখ বন্ধ রাখার পর ৫০০-৬৫০মিলি পানি পান করতে হবে। অবশ্যই
              শ্বাস কষ্টের রুগীরা কুসুম গরম পানি পান করবেন। কোর্স চলাকালীন সময়ে
              প্রতি ঘন্টায় অল্প অল্প পানি পানি করা ভাল।
              <br />
              ৪) নিয়মিত খাদ্য গ্রহণের কমপক্ষে 1:30 (দেড়) ঘন্টা পর Bio Spray Plus
              গ্রহণ করা এবং কমপক্ষে ১ ঘন্টা ৩০ মিনিটের মধ্যে কোন প্রকার খাদ্য
              গ্রহণ করা যাবে না।
              <br />
              ৫) খালি পেটে রক্তে কম Glucose এবং পরিবাহিত মুক্ত ফ্যাটি এসিড কম
              থাকায় Bio Spray Plus পিটুইটারী গ্লান্ডের মাধ্যমে অধিকতর HGH হরমোন
              তৈরী করতে সক্ষম।
              <br /> <br />
              <b>Bio Spray Plus গ্রহণের পরিমানঃ </b>
              <br />
              ১) জিহ্বার নীচে ১ম সপ্তাহে ৩ চাপ, ২য় সপ্তাহে ৪ চাপ, ৩য় সপ্তাহে ৫
              চাপ (চলমান) গ্রহণ করা। ইহা সাধারণ রুগীদের জন্য প্রযোজ্য হবে।{" "}
              <br />
              ২) শ্বাস কষ্ট, কিডনীর সমস্যা, গ্যাংরিন, পাইলস ইত্যাদি জটিল রোগী
              এবং অসুস্থ্য শিশুদের ক্ষেত্রে অভিজ্ঞদের পরামর্শ মোতাবেক Bio Spray
              Plus গ্রহণ করতে হবে। Bio Spray Plus ব্যবহারে নিম্নে উল্লেখিত
              উপসর্গ দেখা দিতে পারেঃ জিহ্বার নীচে ফোলা বা সাময়িক ঘা হতে পারে।
              মাথা ব্যাথা, জ্বর জ্বর বা বমি বমি ভাব অনুভূত হতে পারে। বর্তমানে যে
              রোগে আক্রান্ত তাহা কিছুটা বৃদ্ধি পেতে পারে বা দেহের মধ্যে কোন
              সুপ্ত রোগ থাকলে তাহা প্রকাশ পেতে পারে সাময়িক সময়ের জন্য। ধৈর্যের
              সাথে ইহার ব্যবহারে কোন প্রকার Side Effect নেই। কারণ Bio Spray Plus
              উন্নত Bio Technology দিয়ে তৈরী একটি (ভেষজ ও প্রাণিজ) প্রাকৃতিক ফুড
              সাপ্লিমেন্ট।
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home_Blog;