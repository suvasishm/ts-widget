import {Fragment, h} from 'preact';
import {useContext, useMemo, useState, useEffect} from 'preact/hooks';
import style from './widgetForm.css';
import { ConfigContext, ServiceContext } from '../AppContext';
import Field from '../components/Field';
import { useIsMounted } from '../hooks';

const WidgetForm = () => {
    const config = useContext(ConfigContext);
    const service = useContext(ServiceContext);
    const mounted = useIsMounted();

    const [submitting, setSubmitting] = useState(false);
    // const [serverError, setServerError] = useState('');

    const [serviceType, setServiceType] = useState('R');

    const [product, setProduct] = useState('');
    const productError = useMemo(
        () => mounted.current && (!product)
            ? 'A product must be selected' : '',
        [product, submitting, mounted]);

    const [zipCode, setZipCode] = useState('');
    const zipCodeError = useMemo(
        () => mounted.current && (!zipCode || !(/^\d{5}$/.test(zipCode)))
            ? 'ZIP code is required and must be valid 5 digit code' : '',
        [zipCode, submitting, mounted]);

    const formValid = useMemo(
        () => ![zipCodeError, productError].reduce((m, n) => m + n),
        [zipCodeError, productError]);

    useEffect(() => {
        if (!submitting) {
            return;
        }
        // setServerError(''); // reset previous server error
        if (!formValid) {
            // setSubmitting(false);
            return;
        }

        console.log('Sending form', { zipCode, product, serviceType });

        // @ts-ignore
        window?.open(`https://searshomeservices.com/scheduler/beta/shs?serviceType=${serviceType}&zipCode=${zipCode}&productName=${product}`, '_blank').focus();

        /*service?.validateForm({ zipCode, product })
            .then(() => {
                // todo if required
            })
            .catch(() => {
                setServerError(`Something went wrong and we couldn't send your form. Please try again later.`);
            })
            .then(() => setSubmitting(false));*/
    }, [formValid, submitting, serviceType, zipCode, product, service]);

    console.log(product, zipCode);
    return (
        <div>
            <p>{config.text.formSubTitle ??
                <Fragment>SCHEDULE YOUR REPAIR</Fragment>}</p>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitting(true);
                }}>
                {/*{serverError && <div className={style.error}>{serverError}</div>}*/}
                <Field
                    name='message'
                    title='Message'
                    error={productError}
                    render={(inputProps) => (
                        <select
                            autoFocus
                            onChange={(e) => setProduct(e.currentTarget.value)}
                            {...inputProps}>
                            <option value=''>Select Product</option>
                            <option value='cooktop'>COOKTOP</option>
                            <option value='dishwasher'>DISHWASHER</option>
                            <option value='dryer'>DRYER</option>
                            <option value='over'>OVEN</option>
                        </select>
                    )} />

                <Field
                    name='zip'
                    title='ZIP code'
                    error={zipCodeError}
                    render={(inputProps) => (
                        <input
                            type='text'
                            inputMode='zip code'
                            placeholder='ZIP code'
                            onInput={(e) => setZipCode(e.currentTarget.value)}
                            {...inputProps}
                        />)} />

                <Field
                    name='maintenance'
                    title='Maintenance'
                    render={(inputProps) => (
                        <input
                            type='checkbox'
                            onClick={() => {
                                setServiceType(!serviceType || serviceType === 'R' ? 'M' : 'R');
                            }}
                            {...inputProps}
                        />)} />

                <div className={style.actions}>
                    <button type='submit' disabled={!formValid}>
                        {'Schedule Now'}
                    </button>
                </div>
            </form>
        </div >);
};

export default WidgetForm;
