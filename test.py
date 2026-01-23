from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware



app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class CalcRequest(BaseModel):
    a: float
    b: float
    operator: str


@app.post("/calculate")
def calculate(data: CalcRequest):
    if data.operator == "+":
        result = data.a + data.b
    elif data.operator == "-":
        result = data.a - data.b
    elif data.operator == "*":
        result = data.a * data.b
    elif data.operator == "/":
        if data.b == 0:
            return {"error": "Division by zero"}
        result = data.a / data.b
    else:
        return {"error": "Invalid operator"}

    return {"result": result}
