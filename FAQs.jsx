import { useRef, useState } from "react"

const FaqsCard = (props) => {

    const answerElRef = useRef()
    const { faqsList, idx,openAccordion, activeAccordion } = props

    const handleOpenAnswer = () => {
        const answerElH = answerElRef.current.childNodes[0].offsetHeight
        openAccordion(idx, answerElH);
    }

    const isActive = activeAccordion === idx;

    return (
        <div 
            className="space-y-3 mt-5 overflow-hidden border-b"
            key={idx}
            onClick={handleOpenAnswer}
        >
            <h4 className={`cursor-pointer pb-5 flex items-center justify-between text-lg font-medium ${isActive ? 'text-gray-400' : 'text-gray-500'}`}>
                {faqsList.q}
                {
                    isActive ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                    )
                }
            </h4>
            <div
                ref={answerElRef} className="duration-300"
                style={isActive ? {height: `${faqsList.answerHeight + 20}px` } : {height: '0px'}}
            >
                <div>
                    <p className="text-gray-400">
                        {faqsList.a}
                    </p>
                </div>
            </div>
        </div>
    )
}

const FAQs = () => {

    const [activeAccordion, setActiveAccordion] = useState(null);
    const [faqsList, setFaqsList] = useState([
    {   id : 1,
        q: "What is an email marketing tool?",
        a: "An email marketing tool is a software application that allows you to create, send, and manage email campaigns. It helps you to create professional-looking emails, track their performance, and analyze the results.",
    },
    {   
        id : 2,
        q: "What are the benefits of using an email marketing tool?",
        a: "An email marketing tool can help you reach a larger audience, increase engagement with your customers, and generate more leads.",
    },
    {
        id : 3,
        q: "How do I get started with an email marketing tool?",
        a: "To get started with an email marketing tool, you will need to sign up for an account with our provider, Once you have signed up for an account, you can start.",
    },
    {
        id : 4,
        q: "How does an AI-powered email marketing tool work?",
        a: "Social media is a great place for businesses because it has the An AI-powered email marketing tool works by analyzing customer data to identify patterns and trends in order to create more targeted campaigns.",
    },
    {
        id : 5,
        q: "What are the benefits of using an AI-powered email marketing tool?",
        a: "AI-powered email marketing tools can help marketers save time and money by automating tasks such as segmentation, personalization, content optimization, and more.",
    }
]);

    const openAccordion = (index, answerHeight) => {
        setActiveAccordion(index);
        const faqsListCopy = [...faqsList]; // Assuming you have faqsList defined somewhere
        faqsListCopy[index].answerHeight = answerHeight;
        setFaqsList(faqsListCopy); // Update the modified faqsList with the answer height
    };

    return (
        <div className="custom-screen text-gray-300">
            <div className="max-w-xl text-center xl:mx-auto">
                <h2 className="text-gray-50 text-3xl font-extrabold sm:text-4xl">
                    Frequently Asked Questions
                </h2>
                <p className="mt-3">
                    Answered all frequently asked questions, Still confused? feel free to contact us.
                </p>
            </div>
            <div className='mt-12'>
                <div className="mt-14 max-w-2xl mx-auto">
                    {
                        faqsList.map((item, idx) => (
                            <FaqsCard
                                idx={idx}
                                faqsList={item}
                                openAccordion={openAccordion}
                                activeAccordion={activeAccordion}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default FAQs