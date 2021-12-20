const { Campus, Student } = require('../models');

const seedDB = async () => {
	const dummy_campus = await Campus.create({
		name: "Hunter College",		
		address: "695 Park Avenue, New York, NY 10065",
		imageURL: "https://s29068.pcdn.co/wp-content/uploads/68th-street-campus-768x432.jpg",
		description: "This is a school in NYC."
	});
	const dummy_campus2 = await Campus.create({
		name: "Harvard",
		address: "Massachusetts Hall, Cambridge, MA 02138",
		imageURL: "https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F1209892117%2F0x0.jpg",
		description: "This is a school in MA."
	});

	const dummy_student = await Student.create({
			firstname: "Joe",
      lastname: "Shmo",
		email: "JoeShmo@gmail.com",
		imageURL: "https://th-thumbnailer.cdn-si-edu.com/5a79C6jJ8BrChMX5tgEKiMI_qqo=/1000x750/filters:no_upscale():focal(792x601:793x602)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/52/e4/52e44474-c2dc-41e0-bb77-42a904695196/this-image-shows-a-portrait-of-dragon-man-credit-chuang-zhao_web.jpg",
		gpa: 1.2
		});
	
		const dummy_student2 = await Student.create({
			firstname: "Melissa",
      lastname: "Lynch",
		email: "MLynch@gmail.com",
		gpa: 4.0
		});

	await dummy_student.setCampus(dummy_campus);
	await dummy_student2.setCampus(dummy_campus2);
	
}

module.exports = seedDB;
