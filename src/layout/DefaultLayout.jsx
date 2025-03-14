import Header from "./../components/Header/index.jsx";

const DefaultLayout = () => {

    return (
        <>
            <Header
                title='Пропс title переданный из default layout'
                subTitle='Пропс subtitle переданный из default layout'
                onClick='Клик по кнопке'
            />
        </>
    )
}
export default DefaultLayout