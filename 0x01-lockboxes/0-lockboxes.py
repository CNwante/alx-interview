#!/usr/bin/python3
"""
A module for unlocking boxes
"""


def canUnlockAll(boxes):
    """
    Returns true if all boxes are unlocked, otherwise, false
    """
    box_length = len(boxes)
    opened = set([0])
    keys = set(boxes[0])

    while keys:
        new_key = keys.pop()

        if new_key not in opened and new_key < box_length:
            opened.add(new_key)
            keys.update(boxes[new_key])

    return len(opened) == box_length
