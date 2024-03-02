from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()


@app.get("/")
async def root():
    return {"message": "Hello World"}

# USER API
@app.get("/users/user/{user_id}")
async def get_user_by_id(user_id: int):
    return {"user_id": user_id}

@app.post("/users/user/{user_id}")
async def create_user(user_id: int):
    return {"user_id": user_id}

@app.put("/users/user/{user_id}")
async def update_user(user_id: int):
    return {"user_id": user_id}

@app.delete("/users/user/{user_id}")
async def delete_user(user_id: int):
    return {"user_id": user_id}

#Get users using a criteria object in the request body
@app.get("/users/users")
async def get_users(criteria: dict):
    return {"criteria": criteria}