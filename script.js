document.getElementById("button").addEventListener("click", function () {
	let nama = document.getElementById("nama").value;
	let kelas = document.getElementById("kelas").value;
	let alamat = document.getElementById("alamat").value;
	let tentang = document.getElementById("tentang").value;
	alert(`Hi, ${nama}`);
	alert(`From, ${kelas}`);
	alert(`${alamat}`);
	alert(`${tentang}`);
	console.log("Jalan");
});
