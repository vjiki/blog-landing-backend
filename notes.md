app.post("/auth/login", (req, res) => {
console.log(req.body);

if (req.body.email == "test@tes.ru") {
const token = jwt.sign(
{
email: req.body.email,
fullName: "Вася Пупкин",
},
"secret123"
);
}

res.json({
success: true,
token,
});
});
