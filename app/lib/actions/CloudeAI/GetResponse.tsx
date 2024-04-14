import Anthropic from '@anthropic-ai/sdk';

const anthropic = new Anthropic();

export async function ClaudeAi({input}:any) {
    await anthropic.messages.create({
    model: "claude-3-opus-20240229",
    max_tokens: 1024,
    messages: [
        {"role": "user", "content":`${input}`}
    ]
});
}