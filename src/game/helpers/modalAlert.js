import Swal from "sweetalert2";

export const modalAlert = (title, text, icon) => {
    setTimeout(() => {
        Swal.fire({
            title: title,
            text: text,
            icon: icon,
            timer: 1000,
            showCancelButton: false,
            showConfirmButton: false
        });
    }, 500);
};