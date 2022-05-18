import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

const AddDoctor = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();

    const { data: services, isLoading } = useQuery('services', () => fetch(`http://localhost:5000/service`).then(res => res.json()));


    const imageStorageKey = '23443cc3876f3a4ab06530809164519d';

    const onSubmit = async data => {
        // console.log(data);
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData

        })
            .then(res => res.json())
            .then(result => {
                console.log('image bb ', result);
                if (result.success) {
                    const img = result.data.url;
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        specialty: data.specialty,
                        img: img

                    }
                    // send to your database

                }


            })

    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div className="text-2xl">Add a New Doctor</div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Your Name"
                        class="input input-bordered w-full max-w-xs"
                        {...register("name", {
                            required: {
                                value: true,
                                message: 'name is Required'
                            }
                        })}
                    />
                    <label class="label">
                        {errors.name?.type === 'required' && <span class="label-text-alt text-red-500">{errors.name.message}</span>}
                    </label>
                </div>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Email</span>
                    </label>
                    <input
                        type="email"
                        placeholder="Your Email"
                        class="input input-bordered w-full max-w-xs"
                        {...register("email", {
                            required: {
                                value: true,
                                message: 'Email is Required'
                            },
                            pattern: {
                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                message: 'Provide a vilid Email'
                            }
                        })}
                    />
                    <label class="label">
                        {errors.email?.type === 'required' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                    </label>
                </div>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">specialty</span>
                    </label>

                    <select {...register("specialty")} className='select w-full max-w-xs' id="">
                        {
                            services.map(service =>
                                <option key={service._id}>{service.name}</option>
                            )
                        }
                    </select>
                </div>
                {/* {signInError} */}

                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Photo</span>
                    </label>
                    <input
                        type="file"
                        class="input input-bordered w-full max-w-xs"
                        {...register("image", {
                            required: {
                                value: true,
                                message: 'Image is Required'
                            }
                        })}
                    />
                    <label class="label">
                        {errors.name?.type === 'required' && <span class="label-text-alt text-red-500">{errors.name.message}</span>}
                    </label>
                </div>

                <input className=' btn  w-full max-w-xs' type="submit" value="ADD" />
            </form>
        </div>
    );
};

export default AddDoctor;