import { Helmet } from "react-helmet-async";
import BreadCrumb from "../../components/breadCrumb/BreadCrumb";
import LayoutV1 from "../../components/layouts/LayoutV1";
import RegisterContent from "../../components/register/RegisterContent";

const RegisterPage = () => {
    return (
        <>
            <Helmet>
                <title>Agrica - Register</title>
            </Helmet>

            <LayoutV1>
                <BreadCrumb title="Register Page" breadCrumb="register" />
                <RegisterContent />
            </LayoutV1>
        </>
    );
};

export default RegisterPage;