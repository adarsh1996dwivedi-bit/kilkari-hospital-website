export const hospital = {
    name: 'Kilkari Hospital',
    hindi: 'बच्चों का अस्पताल',
    tagline: 'Caring For Your Little Ones',
    phoneDisplay: '+91 87912 01424',
    phoneTel: '+918791201424',
    address: 'H.N. 75, Awas Vikas No.-1, (Near SBI Bank), Kalyanpur, Kanpur Nagar',
    shortAddress: 'Kalyanpur, Kanpur Nagar',
    maps: 'https://www.google.com/maps/search/?api=1&query=H.N.+75+Awas+Vikas+No-1+Near+SBI+Bank+Kalyanpur+Kanpur+Nagar',
    facilitiesLine:
        'ओ.पी.डी., आई.पी.डी., 24 घण्टे एम्बुलेंस सेवा, बच्चों का टीकाकरण, बच्चों के लिए ओ.पी.डी. & आई.पी.डी., स्किन केयर, हेयर ट्रांसप्लांट आदि सुविधाएँ उपलब्ध।',
};

export const specialities = [
    {
        slug: 'paediatric-care',
        title: 'Paediatric Care',
        blurb: 'Everyday care for infants, children and teenagers.',
        text: 'Fever, cough, feeding trouble, growth questions and childhood illness are seen in paediatric OPD. Dr. A.K. Krishnawat and Dr. Satyam Gupta consult for children at Kilkari Hospital.',
        doctors: ['ak-krishnawat', 'satyam-gupta'],
    },
    {
        slug: 'neonatal-care',
        title: 'Neonatal Care',
        blurb: 'Support for newborns and new parents.',
        text: 'Neonatology consultations cover the early days after birth — feeding, jaundice concerns, weight checks and when a newborn needs closer observation. Call before you come so the right doctor is available.',
        doctors: ['ak-krishnawat', 'satyam-gupta'],
    },
    // {
    //     slug: 'maternity',
    //     title: 'Maternity',
    //     blurb: 'Pregnancy consultations with a gynaecologist.',
    //     text: 'Dr. Ankita Gupta sees pregnancy-related consultations. Ask the front desk which maternity services are scheduled on the day you plan to visit.',
    //     doctors: ['ankita-gupta'],
    // },
    {
        slug: 'gynaecology',
        title: 'Gynaecology',
        blurb: 'Women’s health consultations in OPD.',
        text: 'Gynaecology OPD covers routine women’s health concerns and follow-up visits with Dr. Ankita Gupta, consultant gynaecologist.',
        doctors: ['ankita-gupta'],
    },
    {
        slug: 'infertility',
        title: 'Infertility Consult',
        blurb: 'A first conversation about fertility concerns.',
        text: 'Dr. Ankita Gupta consults as an infertility expert. This is a clinic consultation — confirm the scope of treatment with the doctor at your visit.',
        doctors: ['ankita-gupta'],
    },
    {
        slug: 'vaccination',
        title: 'Vaccination',
        blurb: 'Childhood immunisation at the hospital.',
        text: 'Vaccination for children is available at Kilkari Hospital. Bring the vaccination card if you have one, and call ahead to check vaccine availability for the day.',
        doctors: ['ak-krishnawat', 'satyam-gupta'],
    },
    {
        slug: 'skin-care',
        title: 'Skin Care',
        blurb: 'Dermatology for children and adults.',
        text: 'Dr. Dhwani Singh, dermatologist and cosmetologist, sees skin concerns. She trained as a senior resident at KEM Hospital, Mumbai.',
        doctors: ['dhwani-singh'],
    },
    {
        slug: 'cosmetology',
        title: 'Cosmetology',
        blurb: 'Skin consultations beyond medical rashes.',
        text: 'Cosmetic dermatology consultations are offered alongside medical skin care. The doctor will explain what is suitable after examining you.',
        doctors: ['dhwani-singh'],
    },
    {
        slug: 'hair-transplant',
        title: 'Hair Transplant',
        blurb: 'Hair restoration consultations for adults.',
        text: 'Hair transplant is available as a hospital facility. It is an adult service and starts with an assessment, not a same-day procedure unless the doctor says so.',
        doctors: ['dhwani-singh'],
    },
    {
        slug: 'critical-care',
        title: 'Critical Care',
        blurb: 'Physician and intensivist support.',
        text: 'Dr. Pallavi Gupta is a physician and intensivist (MBBS, MD Anaesthesia, PDCC). She supports seriously unwell patients who need close medical care in hospital.',
        doctors: ['pallavi-gupta'],
    },
    {
        slug: 'ambulance',
        title: '24-Hour Ambulance',
        blurb: 'Ambulance service, day and night.',
        text: 'A 24-hour ambulance is part of the hospital’s facilities. Call 8791201424 and tell the desk where you are and who needs to be brought in.',
        doctors: [],
    },
    {
        slug: 'opd-ipd',
        title: 'OPD & IPD',
        blurb: 'Outpatient visits and inpatient admission.',
        text: 'OPD is for consultations by appointment or walk-in, as the day’s schedule allows. IPD is for patients who need to be admitted. The front desk will guide you.',
        doctors: ['ak-krishnawat', 'satyam-gupta', 'pallavi-gupta', 'ankita-gupta', 'dhwani-singh'],
    },
];

export const doctors = [
    {
        slug: 'ak-krishnawat',
        name: 'Dr. A.K. Krishnawat',
        role: 'Consultant Pediatrician & Neonatologist',
        creds: 'MBBS, DCH, MD',
        band: 'sky',
        bookable: true,
        specialitySlugs: ['paediatric-care', 'neonatal-care', 'vaccination', 'opd-ipd'],
        about:
            'Dr. A.K. Krishnawat consults as a paediatrician and neonatologist at Kilkari Hospital. Families visit for childhood illness, newborn questions and vaccination planning.',
    },
    {
        slug: 'satyam-gupta',
        name: 'Dr. Satyam Gupta',
        role: 'Pediatrician & Neonatologist',
        creds: 'MBBS, DCH, DNB (Pediatric), FNN (Singapore), PGPN (Boston, USA), Fellowship in Neonatology',
        band: 'orange',
        bookable: true,
        specialitySlugs: ['paediatric-care', 'neonatal-care', 'vaccination', 'opd-ipd'],
        about:
            'Dr. Satyam Gupta sees children and newborns. His listed training includes DNB in paediatrics, neonatology fellowship, FNN (Singapore) and PGPN (Boston, USA).',
    },
    {
        slug: 'pallavi-gupta',
        name: 'Dr. Pallavi Gupta',
        role: 'Physician and Intensivist',
        creds: 'MBBS, MD (Anaesthesia), PDCC',
        band: 'deep',
        bookable: true,
        specialitySlugs: ['critical-care', 'opd-ipd'],
        about:
            'Dr. Pallavi Gupta is a physician and intensivist. Her qualifications are MBBS, MD in Anaesthesia and PDCC. She looks after patients who need close inpatient medical care.',
    },
    {
        slug: 'ankita-gupta',
        name: 'Dr. Ankita Gupta',
        role: 'Consultant Gynecologist and Infertility Expert',
        creds: 'MBBS, MS (Obs and Gynae)',
        band: 'sun',
        bookable: true,
        specialitySlugs: ['maternity', 'gynaecology', 'infertility', 'opd-ipd'],
        about:
            'Dr. Ankita Gupta consults in obstetrics, gynaecology and infertility. Pregnancy visits, women’s health concerns and fertility questions can be booked with her OPD.',
    },
    {
        slug: 'dhwani-singh',
        name: 'Dr. Dhwani Singh',
        role: 'Dermatologist & Cosmetologist',
        creds:
            'MBBS, MD (Skin, VD & Leprosy), DNB (Dermatology), FLSAR (Mumbai). Ex-Senior Resident, KEM Hospital, Mumbai',
        band: 'sky',
        bookable: true,
        specialitySlugs: ['skin-care', 'cosmetology', 'laser-skin', 'hair-transplant', 'opd-ipd'],
        about:
            'Dr. Dhwani Singh practices dermatology and cosmetology, including skin care, laser skin surgery and hair transplant consultations. She was a senior resident at KEM Hospital, Mumbai.',
    },
    {
        slug: 'adarash-dwivedi',
        name: 'Adarash Dwivedi',
        role: 'Managing Director',
        creds: 'Hospital leadership',
        band: 'orange',
        bookable: false,
        specialitySlugs: [],
        about:
            'Adarash Dwivedi is the Managing Director of Kilkari Hospital. For appointments and medical questions, call the front desk and ask for the relevant doctor.',
    },
];

export const slides = [
    {
        id: 'children',
        kicker: 'बच्चों का अस्पताल',
        title: 'Caring for your little ones, in Kalyanpur.',
        text: 'Paediatric OPD, newborn care and vaccination with doctors who see children every day — at one hospital near SBI Bank, Awas Vikas.',
        image:
            'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1800&q=80',
        tone: 'sky',
    },
    {
        id: 'maternity',
        kicker: 'Maternity & women’s health',
        title: 'A gynaecologist on the same campus as your child’s doctor.',
        text: 'Pregnancy consultations, gynaecology and infertility visits with Dr. Ankita Gupta, alongside the paediatric team.',
        image:
            'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=1800&q=80',
        tone: 'orange',
    },
    {
        id: 'emergency',
        kicker: 'Day and night',
        title: '24-hour ambulance when the night feels too long.',
        text: 'OPD, IPD and round-the-clock ambulance support. Call 8791201424 and say who needs help and where you are.',
        image:
            'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1800&q=80',
        tone: 'deep',
    },
];

export const stats = [
    { value: '24×7', label: 'Ambulance service' },
    { value: '6', label: 'Doctors on the team' },
    { value: 'OPD', label: 'Paediatric & maternity visits' },
    { value: '1', label: 'Hospital in Kalyanpur' },
];

export const stories = [
    {
        quote:
            'We came for our child’s vaccination and the desk told us exactly what to carry next time. The visit was short and calm.',
        name: 'A parent',
        place: 'Kalyanpur',
        topic: 'Vaccination',
    },
    {
        quote:
            'I wanted a gynaecology opinion close to home. Booking meant a phone call, and the doctor explained the next step before I left.',
        name: 'A patient',
        place: 'Kanpur Nagar',
        topic: 'Gynaecology',
    },
    {
        quote:
            'Our baby was unsettled after sunset. Calling the hospital number was clearer than guessing which clinic was open.',
        name: 'A family',
        place: 'Awas Vikas',
        topic: 'Paediatric OPD',
    },
    {
        quote:
            'Skin trouble in a child is hard to describe on the phone. The dermatology visit started with a proper look, not a rushed cream.',
        name: 'A parent',
        place: 'Kalyanpur',
        topic: 'Skin care',
    },
];

export const posts = [
    {
        slug: 'fever-in-children',
        title: 'When a child’s fever needs a hospital visit',
        author: 'Dr. A.K. Krishnawat',
        authorSlug: 'ak-krishnawat',
        date: '12 March 2026',
        topic: 'Paediatrics',
        excerpt:
            'Not every fever is an emergency. These are the signs families in our OPD often wait too long to mention.',
        paragraphs: [
            'A warm forehead by itself is a reason to watch, offer fluids and note how the child is behaving. Many fevers settle with rest. The visit becomes more urgent when the child is unusually sleepy, refuses fluids, has a rash that is spreading, is struggling to breathe, or is under three months old.',
            'Bring the temperature record if you have been checking it, plus any medicines already given. That saves the paediatrician from guessing the dose timeline.',
            'Kilkari Hospital’s paediatric OPD is in Kalyanpur. If you are unsure whether to come at night, call 8791201424 and describe the child’s age and symptoms. This note is general information, not a diagnosis.',
        ],
    },
    {
        slug: 'first-week-newborn',
        title: 'The first week with a newborn: what to ask',
        author: 'Dr. Satyam Gupta',
        authorSlug: 'satyam-gupta',
        date: '2 March 2026',
        topic: 'Newborn care',
        excerpt:
            'Feeding, wet nappies, colour and sleep are the four things neonatology visits usually start with.',
        paragraphs: [
            'New parents often arrive with a long list, and that is useful. Start with feeding: how often, how long, and whether the baby settles afterwards. Mention urine and stool counts. Mention yellow skin, poor feeding, or a temperature that does not feel normal.',
            'You do not need perfect words. “He is sleepier than yesterday” is a complete sentence in clinic.',
            'Dr. Satyam Gupta and Dr. A.K. Krishnawat see newborns at Kilkari Hospital. Call ahead so you are not waiting with a very young baby longer than you need to.',
        ],
    },
    {
        slug: 'planning-a-pregnancy-visit',
        title: 'What a first pregnancy OPD visit usually covers',
        author: 'Dr. Ankita Gupta',
        authorSlug: 'ankita-gupta',
        date: '18 February 2026',
        topic: 'Maternity',
        excerpt:
            'The first conversation is about dates, symptoms and the tests that actually belong at this stage.',
        paragraphs: [
            'If you think you are pregnant, or you are planning to be, a gynaecology visit is the right place to confirm dates and talk about medicines you already take. Bring previous reports if you have them. A phone photo of the report is fine.',
            'Questions about nausea, spotting, or which warning signs should send you back the same day are worth asking out loud. Write them down before you enter the room.',
            'Dr. Ankita Gupta consults at Kilkari Hospital, H.N. 75, Awas Vikas No.-1, near SBI Bank, Kalyanpur.',
        ],
    },
    {
        slug: 'childhood-skin-rashes',
        title: 'Childhood rashes: what helps the dermatologist',
        author: 'Dr. Dhwani Singh',
        authorSlug: 'dhwani-singh',
        date: '5 February 2026',
        topic: 'Skin care',
        excerpt:
            'A clear photo in daylight, and a note of when the rash started, changes the appointment.',
        paragraphs: [
            'Rashes change by the hour. If you can, take a photo in daylight before creams go on. Note itching, fever, new soaps, and whether anyone else at home has something similar.',
            'Do not start a leftover steroid cream because it helped a cousin. It can hide the pattern the dermatologist needs to see.',
            'Skin care, laser skin surgery and hair transplant consultations are part of the facilities at Kilkari Hospital. Hair transplant is for adults and follows an assessment.',
        ],
    },
];

export const reasons = [
    {
        title: 'Children first',
        text: 'The hospital’s name says it plainly: बच्चों का अस्पताल. Paediatric and newborn consultations sit at the centre of the practice.',
    },
    {
        title: 'One address, several OPDs',
        text: 'Paediatrics, gynaecology, critical care and dermatology are on the same campus, so a family is not sent across the city for a second opinion.',
    },
    {
        title: 'A phone that is answered for ambulances',
        text: '24-hour ambulance is a listed facility. Keep 8791201424 saved. Say the landmark — Near SBI Bank, Awas Vikas No.-1 — if you are directing someone in.',
    },
    {
        title: 'Care you can name',
        text: 'You meet a named consultant, not an anonymous desk. Credentials are on each doctor’s page, taken from the hospital’s own introduction.',
    },
];

export const careServices = [
    {
        title: 'Paediatric OPD',
        text: 'Consultations for infants, children and adolescents. Call to ask which paediatrician is in OPD that day.',
    },
    {
        title: 'IPD admission',
        text: 'If a doctor advises admission, the front desk explains the bed, what to bring, and who can stay with the patient.',
    },
    {
        title: 'Vaccination desk',
        text: 'Childhood immunisation at the hospital. Bring the vaccine card and call the same morning to confirm stock.',
    },
    {
        title: '24-hour ambulance',
        text: 'Call 8791201424, share the patient’s age and your location, and the desk will guide the ambulance request.',
    },
    {
        title: 'Maternity & gynaecology OPD',
        text: 'Appointments with Dr. Ankita Gupta for pregnancy, gynaecology and infertility consultations.',
    },
    {
        title: 'Skin, laser & hair',
        text: 'Dermatology and cosmetology with Dr. Dhwani Singh, including laser skin surgery and adult hair transplant consults.',
    },
];

export function doctorBySlug(slug) {
    return doctors.find((doctor) => doctor.slug === slug);
}

export function specialityBySlug(slug) {
    return specialities.find((item) => item.slug === slug);
}

export function postBySlug(slug) {
    return posts.find((post) => post.slug === slug);
}

export function doctorsForSpeciality(slug) {
    return doctors.filter((doctor) => doctor.specialitySlugs.includes(slug));
}
