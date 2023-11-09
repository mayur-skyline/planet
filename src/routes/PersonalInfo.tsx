import { Field, FieldArray, FieldProps, Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import Slider from "../components/Slider";
import "../style/slider.css";

interface PersonalInfoInterface {
  name: string;
  email: string;
}

const defaultValue: PersonalInfoInterface = { name: "", email: "" };

const PersonalInfo = () => {
  const navigate = useNavigate();

  const getPersonalInfo = (): PersonalInfoInterface[] => {
    const data = localStorage.getItem("data");
    if (data) {
      const personalInfo: PersonalInfoInterface[] =
        JSON.parse(data)?.personalInfo;
      return personalInfo;
    }

    return [defaultValue];
  };

  const redirectToPlanet = () => {
    navigate("/");
  };

  return (
    <div>
      <h1>Personal Info</h1>
      <Formik
        initialValues={{
          slider: 50,
          personalInfo: getPersonalInfo(),
        }}
        onSubmit={(values) => {
          localStorage.setItem("data", JSON.stringify(values, null, 2));
          redirectToPlanet();
        }}
      >
        {({ values, setFieldValue }) => (
          <Form>
            <Field name="lastName">
              {({ field }: FieldProps) => (
                <Slider
                  {...field}
                  onValueChange={(v) => {
                    setFieldValue(field.name, v);
                  }}
                />
              )}
            </Field>

            <FieldArray
              name="personalInfo"
              render={(arrayHelpers) => (
                <div>
                  {values.personalInfo.map((info, index) => (
                    <div key={index}>
                      <Field name={`personalInfo.${index}.name`} />
                      <Field name={`personalInfo.${index}.email`} />
                      <button
                        type="button"
                        onClick={() => arrayHelpers.remove(index)}
                      >
                        -
                      </button>
                    </div>
                  ))}

                  <button
                    type="button"
                    onClick={() => arrayHelpers.push(defaultValue)}
                  >
                    Add more info
                  </button>

                  <div>
                    <button type="submit">Submit</button>
                  </div>
                </div>
              )}
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default PersonalInfo;
