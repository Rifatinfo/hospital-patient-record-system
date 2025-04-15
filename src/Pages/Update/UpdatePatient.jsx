import { useMutation } from "@tanstack/react-query";
import { useLoaderData, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const UpdatePatient = () => {
    const inputStyle =
        "w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:border-orange-600 focus:ring-1 focus:ring-orange-600";

    const navigate = useNavigate();
    const patient = useLoaderData();

    const { isPending, mutateAsync } = useMutation({
        mutationFn: async (updatedPatient) => {
            return await axios.put(`http://localhost:5000/patient-update/${patient._id}`, updatedPatient);
        },
        onSuccess: () => {
            Swal.fire("Success!", "Patient data updated successfully.", "success");
            navigate("/all-patient"); // Navigate to patient list or another page
        },
        onError: () => {
            Swal.fire("Error", "Something went wrong while updating.", "error");
        },
    });

    const handleUpdate = async (e) => {
        e.preventDefault();
        const form = e.target;

        const updatedPatient = {
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

        try {
            await mutateAsync(updatedPatient);
        } catch (err) {
            console.log("Update error:", err.message);
        }
    };

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white shadow-xl rounded-2xl mt-10">
            <h2 className="text-2xl font-bold text-center text-orange-600">Update Patient</h2>
            <form className="space-y-4" onSubmit={handleUpdate}>
                <div>
                    <label className="block font-medium mb-1">Patient ID</label>
                    <input
                        defaultValue={patient.patientId || ""}
                        type="text"
                        name="patientId"
                        className={inputStyle}
                        readOnly
                        required
                    />
                </div>

                <div>
                    <label className="block font-medium mb-1">Full Name</label>
                    <input
                        defaultValue={patient.name || ""}
                        type="text"
                        name="name"
                        className={inputStyle}
                        required
                    />
                </div>

                <div>
                    <label className="block font-medium mb-1">Age</label>
                    <input
                        defaultValue={patient.age || ""}
                        type="number"
                        name="age"
                        className={inputStyle}
                        required
                    />
                </div>

                <div>
                    <label className="block font-medium mb-1">Gender</label>
                    <select name="gender" className={inputStyle} required defaultValue={patient.gender || ""}>
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                <div>
                    <label className="block font-medium mb-1">Diagnosis</label>
                    <input
                        defaultValue={patient.diagnosis || ""}
                        type="text"
                        name="diagnosis"
                        className={inputStyle}
                        required
                    />
                </div>

                <div>
                    <label className="block font-medium mb-1">Treatment Plan</label>
                    <textarea
                        defaultValue={patient.treatmentPlan || ""}
                        name="treatmentPlan"
                        rows={3}
                        className={inputStyle}
                        required
                    />
                </div>

                <div className="flex items-center">
                    <input
                        type="checkbox"
                        name="admitted"
                        defaultChecked={patient.admitted}
                        className="mr-2 accent-amber-600"
                    />
                    <label className="font-medium">Currently Admitted</label>
                </div>

                <div>
                    <label className="block font-medium mb-1">Admission Date</label>
                    <input
                        defaultValue={patient.admissionDate || ""}
                        type="date"
                        name="admissionDate"
                        className={inputStyle}
                    />
                </div>

                <div>
                    <label className="block font-medium mb-1">Notes</label>
                    <textarea
                        defaultValue={patient.notes || ""}
                        name="notes"
                        rows={3}
                        className={inputStyle}
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-orange-600 text-white py-2 px-4 rounded-md hover:bg-orange-700 transition"
                >
                    {isPending ? "Updating..." : "Update Patient"}
                </button>
            </form>
        </div>
    );
};

export default UpdatePatient;
