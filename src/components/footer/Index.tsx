import LanguageSwitcher from "../../components/language-switcher/Index"

export default function Footer() {

    return (
        <>
            <section className="relative flex flex-col justify-between z-10">
                <div className="flex-1 h-full mx-2 pb-2">
                    <div className="flex flex-col flex-1 h-full mx-2">
                        <div className="flex-1"></div>
                        <div className="flex lg:justify-end lg:items-end items-center justify-center w-full flex-1">
                            <LanguageSwitcher />
                        </div>
                    </div>
                </div>
                <div className="flex-1 text-center bg-gray-900 text-white p-4">
                    <p className="text-footer">
                        &copy; Todos os direitos reservados - Thiago da Silva de Souza
                    </p>
                </div>
            </section>
        </>
    )
}