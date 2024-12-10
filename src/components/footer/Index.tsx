import LanguageSwitcher from "../../components/language-switcher/Index"

export default function Footer() {

    return (
        <>
            <section className="relative flex justify-between z-10">
                <div className="flex-1"> </div>
                <div className="flex-1"></div>
                <div className="flex-1 h-full mx-2 p-4">
                    <div className="flex flex-col flex-1 h-full mx-2 p-4">
                        <div className="flex-1"></div>
                        <div className="flex justify-end items-end flex-1">
                            <LanguageSwitcher />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}