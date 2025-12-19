def answer_question(question, context_text=None):
    """
    Mock AI Teacher Engine
    This simulates intelligent teacher responses without using any API.
    """

    question = question.lower()

    if "oligopoly" in question:
        return (
            "An oligopoly is a market structure where a small number of large firms "
            "dominate the market. These firms are interdependent, meaning the actions "
            "of one firm affect others."
        )

    if "advantages" in question:
        return (
            "Advantages of oligopoly include economies of scale, innovation due to "
            "competition, and stable prices in some cases."
        )

    if "disadvantages" in question:
        return (
            "Disadvantages include higher prices, limited consumer choice, and "
            "potential collusion between firms."
        )

    return (
        "That’s a good question. Based on the chapter, this topic focuses on how "
        "firms behave strategically in competitive markets like oligopolies."
    )
