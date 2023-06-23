import { useRef, useState } from "react"

const FaqsCard = (props) => {

    const answerElRef = useRef()
    const [state, setState] = useState(false)
    const [answerH, setAnswerH] = useState('0px')
    const { faqsList, idx } = props

    const handleOpenAnswer = () => {
        const answerElH = answerElRef.current.childNodes[0].offsetHeight
        setState(!state)
        setAnswerH(`${answerElH + 20}px`)
    }

    return (
        <div 
            className="space-y-3 mt-5 overflow-hidden border-b"
            key={idx}
            onClick={handleOpenAnswer}
        >
            <h4 className="cursor-pointer pb-5 flex items-center justify-between text-lg text-gray-700 font-medium">
                {faqsList.q}
                {
                    state ? (
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
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
                style={state ? {height: answerH } : {height: '0px'}}
            >
                <div>
                    <p className="text-gray-500 duration-300">
                        {faqsList.a}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default () => {

    const faqsList = [
        {
            q: "فایل package-lock.json توی پروژه‌های فرانت‌اندی چیه و چه کاربردی داره؟",
            a: "این فایل به صورت خودکار توسط ابزارهای مدیریت پکیج مثل npm و yarn تولید میشه و توی اون، ورژن دقیق پکیج‌هایی که توی برنامه استفاده شده ذخیره میشه. وقتی پروژهٔ ما توی محیط‌های دیگه Deploy میشه یا یک توسعه‌دهندهٔ جدید قراره روی اون کار کنه، وجود فایل package-lock.json هنگام اجرای دستور npm install این اطمینان رو به ما میده که دقیقاً همون ورژن از پکیج‌هایی برای ما نصب بشن که انتظار داریم. این کار باعث میشه که برنامهٔ ما توی محیط‌های مختلف رفتارهای یکسان و قابل پیش‌بینی داشته باشه."
        },
        {
            q: "اتریبیوت tabindex توی HTML چیه؟",
            a: "این اتریبیوت برای راحتی جابجایی بین المنت‌های توی صفحه با استفاده از دکمهٔ Tab روی کیبورد به کار میره و اگه از اون به درستی استفاده کنیم می‌تونه باعث بهبود Accessibility و کارایی صفحهٔ ما بشه. بعضی از المنت‌ها مثل input و button به‌صورت خودکار این اتریبیوت رو دارن و به قول معروف Focusable هستن و به همین دلیل هست که وقتی توی یک فرم از دکمهٔ Tab استفاده می‌کنیم، می‌تونیم به راحتی بین ورودی‌های اون فرم جابجا بشیم بدون اینکه بصورت دستی و با ماوس اونها رو Focus کنیم."
        },
        {
            q: "آیا جاوااسکریپت یک زبان Parallel هست یا Concurrent؟",
            a: "هرچند به جاوااسکریپت مدرن قابلیت‌هایی مثل Web Workers اضافه شده که توی بعضی از کاربردهای خاص می‌تونه شبیه به یک زبان Parallel عمل کنه، اما جاوااسکریپت به دلیل اینکه Single Thread هست، یک Call Stack داره و بنابراین ذاتاً یک زبان Concurrent هست."
        }
    ]

    

    return (
        <section className="leading-relaxed max-w-screen-xl py-12 mx-auto px-4 md:px-8">
            <div className="space-y-3 text-center">
                <h1 className="text-3xl text-gray-800 font-semibold">
                    سوالات اختصاصی
                </h1>
                <p className="text-gray-600 max-w-lg mx-auto text-lg">
                    سوال مصاحبه فرانت‌اند با توضیح اختصاصی.
                </p>
            </div>
            <div className="mt-14 max-w-2xl mx-auto">
                {
                    faqsList.map((item, idx) => (
                        <FaqsCard
                            idx={idx}
                            faqsList={item}
                        />
                    ))
                }
            </div>
        </section>
    )
}