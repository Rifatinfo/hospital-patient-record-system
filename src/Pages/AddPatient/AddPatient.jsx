import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AddPatient = () => {
    const navigate = useNavigate()
    const inputStyle = "w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:border-orange-600 focus:ring-1 focus:ring-orange-600";
    const { isPending, mutateAsync } = useMutation({
        mutationFn: async patient => {
            return await axios.post('http://localhost:5000/new-patient', patient)
        },
        onSuccess: () => {
            Swal.fire("Success!", "Patient data added successfully.", "success");
            navigate("/all-patient"); // Navigate to patient list or another page
        },
        onError: () => {
             Swal.fire("Error", "Something went wrong while adding.", "error");
        }
    })

    if (isPending) return console.log('check')
    const handleSubmit = async e => {

        e.preventDefault();
        const form = e.target;
        const patientData = {
            patientId: form.patientId.value,
            name: form.name.value,
            age: form.age.value,
            gender: form.gender.value,
            diagnosis: form.diagnosis.value,
            treatmentPlan: form.treatmentPlan.value,
            admitted: form.admitted.checked,
            admissionDate: form.admissionDate.value,
            notes: form.notes.value,
        };
        console.log(patientData);
        // all  Data send to database
        try {
            await mutateAsync(patientData)
        } catch (err) {
            console.log(err.message);

        }
        form.reset();

    };

    return (
        <div>
            <div className="max-w-2xl mx-auto p-6 bg-white shadow-xl rounded-2xl mt-10">
                <h2 className="text-2xl font-bold text-center text-orange-600">Add New Patient</h2>
                <form className="space-y-4" onSubmit={handleSubmit}>

                    {/* Patient ID */}
                    <div>
                        <label className="block font-medium mb-1">Patient ID</label>
                        <input type="text" name="patientId" className={inputStyle} required />
                    </div>

                    {/* Name */}
                    <div>
                        <label className="block font-medium mb-1">Full Name</label>
                        <input type="text" name="name" className={inputStyle} required />
                    </div>

                    {/* Age */}
                    <div>
                        <label className="block font-medium mb-1">Age</label>
                        <input type="number" name="age" className={inputStyle} required />
                    </div>

                    {/* Gender */}
                    <div>
                        <label className="block font-medium mb-1">Gender</label>
                        <select name="gender" className={inputStyle} required>
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    {/* Diagnosis */}
                    <div>
                        <label className="block font-medium mb-1">Diagnosis</label>
                        <input type="text" name="diagnosis" className={inputStyle} required />
                    </div>

                    {/* Treatment Plan */}
                    <div>
                        <label className="block font-medium mb-1">Treatment Plan</label>
                        <textarea name="treatmentPlan" rows={3} className={inputStyle} required />
                    </div>

                    {/* Is Admitted */}
                    <div className="flex items-center">
                        <input type="checkbox" name="admitted" className="mr-2 accent-amber-600" />
                        <label className="font-medium">Currently Admitted</label>
                    </div>

                    {/* Admission Date */}
                    <div>
                        <label className="block font-medium mb-1">Admission Date</label>
                        <input type="date" name="admissionDate" className={inputStyle} />
                    </div>

                    {/* Additional Notes */}
                    <div>
                        <label className="block font-medium mb-1">Notes</label>
                        <textarea name="notes" rows={3} className={inputStyle} />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-orange-600 text-white py-2 px-4 rounded-md hover:bg-orange-700 transition"
                    >
                        Add Patient
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddPatient;
