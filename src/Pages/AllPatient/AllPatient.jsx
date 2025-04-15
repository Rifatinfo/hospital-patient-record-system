import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline';
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AllPatient = () => {

    const { data, isLoading, refetch } = useQuery({
        queryKey: ['cars'],
        queryFn: async () => {
            const { data } = await axios.get('http://localhost:5000/all-patient');
            return data;
        }
    });

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-screen text-9xl">
                <span className="text-orange-600 loading loading-bars loading-xl border"></span>
            </div>
        );
    }

    const onDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/all-patient/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "The patient has been deleted.",
                                icon: "success"
                            });
                            refetch();
                        }
                    });
            }
        });
    };
    return (
        <div className="md:mt-30 mt-18 p-2 md:p-0">
            <div className="flex justify-center items-center mt-6 md:mb-10">
                <input
                    type="text"
                    placeholder="Search patients..."
                    className="w-full md:w-1/3 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
            </div>

            <div className="hidden md:block overflow-x-auto ">
                <table className="min-w-full table-auto border border-gray-300 text-sm sm:text-base">
                    <thead className="bg-orange-600 text-white">
                        <tr>
                            <th className="px-3 sm:px-4 py-2 text-left whitespace-nowrap">Patient ID</th>
                            <th className="px-3 sm:px-4 py-2 text-left whitespace-nowrap">Name</th>
                            <th className="px-3 sm:px-4 py-2 text-left whitespace-nowrap">Age</th>
                            <th className="px-3 sm:px-4 py-2 text-left whitespace-nowrap">Gender</th>
                            <th className="px-3 sm:px-4 py-2 text-left whitespace-nowrap">Diagnosis</th>
                            <th className="px-3 sm:px-4 py-2 text-left whitespace-nowrap">Treatment Plan</th>
                            <th className="px-3 sm:px-4 py-2 text-left whitespace-nowrap">Admitted</th>
                            <th className="px-3 sm:px-4 py-2 text-left whitespace-nowrap">Admission Date</th>
                            <th className="px-3 sm:px-4 py-2 text-left whitespace-nowrap">Notes</th>
                            <th className="px-3 sm:px-4 py-2 text-left whitespace-nowrap">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((patient, index) => (
                            <tr key={index} className="border-t border-gray-200 hover:bg-gray-50 transition">
                                <td className="px-3 sm:px-4 py-2 whitespace-nowrap">{patient.patientId}</td>
                                <td className="px-3 sm:px-4 py-2 whitespace-nowrap">{patient.name}</td>
                                <td className="px-3 sm:px-4 py-2 whitespace-nowrap">{patient.age}</td>
                                <td className="px-3 sm:px-4 py-2 whitespace-nowrap">{patient.gender}</td>
                                <td className="px-3 sm:px-4 py-2 whitespace-nowrap">{patient.diagnosis}</td>
                                <td className="px-3 sm:px-4 py-2 whitespace-nowrap">{patient.treatmentPlan}</td>
                                <td className="px-3 sm:px-4 py-2 whitespace-nowrap">{patient.admitted ? "Yes" : "No"}</td>
                                <td className="px-3 sm:px-4 py-2 whitespace-nowrap">{patient.admissionDate}</td>
                                <td className="px-3 sm:px-4 py-2 whitespace-nowrap">{patient.notes}</td>
                                <td className="px-3 sm:px-4 py-2 whitespace-nowrap">
                                    <div className="flex items-center space-x-2">
                                        <Link to={`/update-patient/${patient._id}`}>
                                            <button className="text-blue-600 hover:text-blue-800">
                                                <PencilSquareIcon className="w-5 h-5" />
                                            </button>
                                        </Link>
                                        <Link>
                                            <button onClick={() => onDelete(patient._id)} className="text-red-600 hover:text-red-800">
                                                <TrashIcon className="w-5 h-5" />
                                            </button>
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="md:hidden">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 p-4">
                    {data.map((patient, index) => (
                        <div
                            key={index}
                            className="bg-white p-5 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition"
                        >
                            <h3 className="text-lg font-bold text-orange-600 mb-2">{patient.name}</h3>
                            <div className="space-y-1 text-sm text-gray-700">
                                <p><span className="font-semibold">Patient ID:</span> {patient.patientId}</p>
                                <p><span className="font-semibold">Age:</span> {patient.age}</p>
                                <p><span className="font-semibold">Gender:</span> {patient.gender}</p>
                                <p><span className="font-semibold">Diagnosis:</span> {patient.diagnosis}</p>
                                <p><span className="font-semibold">Treatment:</span> {patient.treatmentPlan}</p>
                                <p><span className="font-semibold">Admitted:</span> {patient.admitted ? 'Yes' : 'No'}</p>
                                <p><span className="font-semibold">Admission Date:</span> {patient.admissionDate}</p>
                                <p><span className="font-semibold">Notes:</span> {patient.notes}</p>
                            </div>
                            <div className="mt-4 flex space-x-3">
                                <Link to={`/update-patient/${patient._id}`}>
                                    <button className="text-blue-600 hover:text-blue-800">
                                        <PencilSquareIcon className="w-5 h-5" />
                                    </button>
                                </Link>
                                <Link>
                                    <button onClick={() => onDelete(patient._id)} className="text-red-600 hover:text-red-800">
                                        <TrashIcon className="w-5 h-5" />
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default AllPatient;