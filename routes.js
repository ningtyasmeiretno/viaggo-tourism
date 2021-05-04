const express = require("express")
const Beach = require("./models/Beach") // new
const Advent = require ("./models/Advent")
const Safari = require ("./models/Safari")
const Slide = require ("./models/Slide")
const router = express.Router()
var path = require('path');



// ==== Router Untuk SPA page ====
router.get("/", async (req, res) => {
	res.sendFile(path.join(__dirname + '/view/index.html'));
	})
router.get("/admin", async (req, res) => {
	res.sendFile(path.join(__dirname + '/view/admin_dashboard.html'));
	})

// Router untuk BEACH
// Get all posts
router.get("/ambilbeach", async (req, res) => {
const ambilbeach = await Beach.find()
res.send(ambilbeach)
})

// posting data BEACH
router.post("/ambilbeach", async (req, res) => {
const ambilbeach = new Beach({
title: req.body.title,
content: req.body.content,
url_img:req.body.url_img,
})
await ambilbeach.save()
res.send(ambilbeach)
})
// update salah satu data di database  
router.patch("/ambilbeach/:id", async (req, res) => {
	try {
		const ambilbeach = await Beach.findOne({ _id: req.params.id })

		if (req.body.title) {
			ambilbeach.title = req.body.title
		}

		if (req.body.content) {
			ambilbeach.content = req.body.content
		}
		if (req.body.content) {
			ambilbeach.url_img = req.body.url_img
		}

		await ambilbeach.save()
		res.send(ambilbeach)
	} catch {
		res.status(404)
		res.send({ error: "Beach doesn't exist!" })
	}
})





router.delete("/ambilbeach/:id", async (req, res) => {
	try {
		await Beach.deleteOne({ _id: req.params.id })
		res.status(204).send()
	} catch {
		res.status(404)
		res.send({ error: "Beach doesn't exist!" })
	}
})
router.get("/ambilbeach/:id", async (req, res) => {
	try {
		const ambilbeach = await Beach.findOne({ _id: req.params.id })
		res.send(ambilbeach)
	} catch {
		res.status(404)
		res.send({ error: "Beach doesn't exist!" })
	}
})

// Router untuk ADVENT

//get all advent
router.get("/ambiladvent", async (req, res) => {
      const ambiladvent = await Advent.find()
      res.send(ambiladvent)
})
//posting data ADVENT
router.post("/ambiladvent", async (req, res) => {
const ambiladvent = new Advent({
      title: req.body.title,
      content: req.body.content,
      url_img:req.body.url_img,
})
await ambiladvent.save()
res.send(ambiladvent)
})
// update salah satu data di database  


router.patch("/ambiladvent/:id", async (req, res) => {
	try {
		const ambiladvent = await Blog.findOne({ _id: req.params.id })

		if (req.body.title) {
			ambiladvent.title = req.body.title
		}

		if (req.body.content) {
			ambiladvent.content = req.body.content
		}
            if (req.body.url_img) {
			ambiladvent.url_img = req.body.url_img
		}

		await ambiladvent.save()
		res.send(ambiladvent)
	} catch {
		res.status(404)
		res.send({ error: "Advent doesn't exist!" })
	}
})

// delete
router.delete("/ambiladvent/:id", async (req, res) => {
	try {
		await Advent.deleteOne({ _id: req.params.id })
		res.status(204).send()
	} catch {
		res.status(404)
		res.send({ error: "Advent doesn't exist!" })
	}
})

// ambil satu data

router.get("/ambiladvent/:id", async (req, res) => {
	try {
		const ambiladvent = await Advent.findOne({ _id: req.params.id })
		res.send(ambiladvent)
	} catch {
		res.status(404)
		res.send({ error: "Advent doesn't exist!" })
	}
})

// Router untuk SAFARI
// Get all posts
router.get("/ambilsafari", async (req, res) => {
const ambilsafari = await Safari.find()
res.send(ambilsafari)
})

// posting data SAFARI
router.post("/ambilsafari", async (req, res) => {
const ambilsafari = new Safari({
title: req.body.title,
content: req.body.content,
url_img:req.body.url_img,
})
await ambilsafari.save()
res.send(ambilsafari)
})
// update salah satu data di database  
router.patch("/ambilsafari/:id", async (req, res) => {
	try {
		const ambilsafari = await Safari.findOne({ _id: req.params.id })

		if (req.body.title) {
			ambilsafari.title = req.body.title
		}

		if (req.body.content) {
			ambilsafari.content = req.body.content
		}
		if (req.body.content) {
			ambilsafari.url_img = req.body.url_img
		}

		await ambilsafari.save()
		res.send(ambilsafari)
	} catch {
		res.status(404)
		res.send({ error: "Safari doesn't exist!" })
	}
})
router.delete("/ambilsafari/:id", async (req, res) => {
	try {
		await Safari.deleteOne({ _id: req.params.id })
		res.status(204).send()
	} catch {
		res.status(404)
		res.send({ error: "Safari doesn't exist!" })
	}
})
router.get("/ambilsafari/:id", async (req, res) => {
	try {
		const ambilsafari = await Safari.findOne({ _id: req.params.id })
		res.send(ambilsafari)
	} catch {
		res.status(404)
		res.send({ error: "Safari doesn't exist!" })
	}
})

// Router untuk SLIDE
// Get all posts
router.get("/ambilslide", async (req, res) => {
const ambilslide = await Slide.find()
res.send(ambilslide)
})

// posting data SLIDE
router.post("/ambilslide", async (req, res) => {
const ambilslide = new Slide({
title: req.body.title,
url_img:req.body.url_img
})
await ambilslide.save()
res.send(ambilslide)
})
// update salah satu data di database  
router.patch("/ambilslide/:id", async (req, res) => {
	try {
		const ambilslide = await Slide.findOne({ _id: req.params.id })

		if (req.body.title) {
			ambilslide.title = req.body.title
		}
		if (req.body.content) {
			ambilslide.url_img = req.body.url_img
		}
		await ambilslide.save()
		res.send(ambilslide)
	} catch {
		res.status(404)
		res.send({ error: "Slide doesn't exist!" })
	}
})

router.delete("/ambilslide/:id", async (req, res) => {
	try {
		await Slide.deleteOne({ _id: req.params.id })
		res.status(204).send()
	} catch {
		res.status(404)
		res.send({ error: "Slide doesn't exist!" })
	}
})




router.get("/ambilslide/:id", async (req, res) => {
	try {
		const ambilslide = await Slide.findOne({ _id: req.params.id })
		res.send(ambilslide)
	} catch {
		res.status(404)
		res.send({ error: "Slide doesn't exist!" })
	}
})

module.exports = router