"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";

const Admin = () => {
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [geminiApiKey, setGeminiApiKey] = useState("");
  const [claudeApiKey, setClaudeApiKey] = useState("");
  const [deepSeekApiKey, setDeepSeekApiKey] = useState("");
  const [deepSiteApiKey, setDeepSiteApiKey] = useState("");
  const [sparkSystemPrompt, setSparkSystemPrompt] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Replace "your_strong_password" with your actual password
    if (password === "admin") {
      setLoggedIn(true);
    } else {
      alert("Incorrect password");
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Implement API key saving logic here (e.g., to local storage, database, etc.)
    console.log("Gemini API Key:", geminiApiKey);
    console.log("Claude API Key:", claudeApiKey);
    console.log("DeepSeek API Key:", deepSeekApiKey);
    console.log("DeepSite API Key:", deepSiteApiKey);
    console.log("Spark System Prompt:", sparkSystemPrompt);
    alert("API keys and system prompt submitted (check console for values)!");
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleGeminiApiKeyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGeminiApiKey(e.target.value);
  };

  const handleClaudeApiKeyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setClaudeApiKey(e.target.value);
  };

  const handleDeepSeekApiKeyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDeepSeekApiKey(e.target.value);
  };

  const handleDeepSiteApiKeyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDeepSiteApiKey(e.target.value);
  };

  const handleSparkSystemPromptChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSparkSystemPrompt(e.target.value);
  };

  if (!loggedIn) {
    return (
      <>
        {/* Removed outer div */}
        <div className="container mx-auto py-20">
          <h1 className="text-2xl font-bold mb-5">Admin Login</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <Button type="submit">Login</Button>
          </form>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto py-10 pt-24"> {/* Added pt-24 for spacing below fixed Navbar */}
        <h1 className="text-2xl font-bold mb-5">Admin Back Office</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="geminiApiKey">Google Gemini API Key</Label>
            <Input
              type="password"
              id="geminiApiKey"
              value={geminiApiKey}
              onChange={handleGeminiApiKeyChange}
            />
          </div>
          <div>
            <Label htmlFor="claudeApiKey">Claude AI API Key</Label>
            <Input
              type="password"
              id="claudeApiKey"
              value={claudeApiKey}
              onChange={handleClaudeApiKeyChange}
            />
          </div>
          <div>
            <Label htmlFor="deepSeekApiKey">DeepSeek API Key</Label>
            <Input
              type="password"
              id="deepSeekApiKey"
              value={deepSeekApiKey}
              onChange={handleDeepSeekApiKeyChange}
            />
          </div>
          <div>
            <Label htmlFor="deepSiteApiKey">DeepSite API Key</Label>
            <Input
              type="password"
              id="deepSiteApiKey"
              value={deepSiteApiKey}
              onChange={handleDeepSiteApiKeyChange}
            />
          </div>
          <div>
            <Label htmlFor="sparkSystemPrompt">Spark System Prompt</Label>
            <Textarea
              id="sparkSystemPrompt"
              value={sparkSystemPrompt}
              onChange={handleSparkSystemPromptChange}
              placeholder="Enter system prompt for Spark"
            />
          </div>
          <Button type="submit">Submit API Keys and Prompt</Button>
        </form>
      </div>
    </>
  );
};

export default Admin;
