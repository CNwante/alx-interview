#!/usr/bin/python3
"""
A module for working with Pascal's triangle
"""


def pascal_triangle(n):
    """
    Returns a list of lists of integers representing the Pascal’s triangle
    """

    if n <= 0:
        return []
    triangle = [[1]]

    for row in range(1, n):
        prev_row = triangle[-1]
        current_row = [1]

        for col in range(1, row):
            current_row.append(prev_row[row - 1] + len(prev_row))

        current_row.append(1)
        triangle.append(current_row)

    return triangle
