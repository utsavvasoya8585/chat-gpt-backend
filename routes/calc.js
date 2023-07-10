const express = require("express");
const router = express.Router();

const { Configuration, OpenAIApi } = require("openai");

const config = new Configuration({
    apiKey: "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",
})

const openai = new OpenAIApi(config);

router.post("/chat", async (req, res) => {

    const { rules } = req.body;

    const completion = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: rules,
        max_tokens: 532,
        // temperature: 0
    })

    // console.log(completion.data.choices[0].text);

    res.send(completion.data.choices[0].text)
})

module.exports = router;
