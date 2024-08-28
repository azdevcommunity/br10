import { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function URLRequestPage() {
  const [url, setUrl] = useState("");
  const [token, setToken] = useState("");
  const [response, setResponse] = useState<string | null>(null);
  const [statusCode, setStatusCode] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResponse(null);
    setStatusCode(null);

    try {
      const res = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          ...(token && { Authorization: `Bearer ${token}` }),
        },
      });

      const data = await res.text();
      setResponse(data);
      setStatusCode(res.status);
    } catch (err) {
      setError("An error occurred while fetching the data.");
    } finally {
      setLoading(false);
    }
  };

  return (
      <div className="flex justify-center items-center h-screen">
        <div className="grid grid-cols-2 gap-8 w-full max-w-4xl">
          <Card className="p-6 space-y-4">
            <CardHeader>
              <CardTitle>Enter URL and Token</CardTitle>
              <CardDescription>Provide the required information to proceed.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <Label htmlFor="url">URL</Label>
                  <Input
                      id="url"
                      type="url"
                      placeholder="https://example.com"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="token">Token</Label>
                  <Input
                      id="token"
                      type="text"
                      placeholder="Enter token"
                      value={token}
                      onChange={(e) => setToken(e.target.value)}
                  />
                </div>
                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? "Sending..." : "Send"}
                </Button>
              </form>
            </CardContent>
          </Card>
          <div className="bg-muted rounded-lg p-6 space-y-4">
            <CardHeader>
              <CardTitle>Result</CardTitle>
              <CardDescription>The response from the query will be displayed here.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {error && <p className="text-red-500">{error}</p>}
                {statusCode && <p>Status Code: {statusCode}</p>}
                {response && <p>Response: {response}</p>}
              </div>
            </CardContent>
          </div>
        </div>
      </div>
  );
}