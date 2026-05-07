const express = require("express");
const { body, validationResult } = require("express-validator");
const { submitContact, getMessages } = require("../controllers/contactController");

const router = express.Router();

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ success: false, errors: errors.array() });
  }
  next();
};

const contactValidation = [
  body("name").trim().notEmpty().withMessage("Name is required").isLength({ max: 100 }),
  body("email").isEmail().withMessage("Valid email is required").normalizeEmail(),
  body("subject").trim().notEmpty().withMessage("Subject is required").isLength({ max: 200 }),
  body("message").trim().notEmpty().withMessage("Message is required").isLength({ max: 2000 }),
];

// POST /api/contact  — submit form
router.post("/", contactValidation, validate, submitContact);

// GET /api/contact   — admin view (protect in production)
router.get("/", getMessages);

module.exports = router;
